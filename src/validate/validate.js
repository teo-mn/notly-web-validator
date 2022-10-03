import {requestCertificationByHash, requestIssuerByAddress, requestUniversityCertByHash} from './blockchainServices'
import {ArrayBufferToString, extractHash} from './pdfUtils'
import extractMetadata from './extractMetadata'
import {jsonWrap} from "./jsonUtils";

export default async function validate(
    pdfArrayBuffer,
    pdfJSMetadata
) {
  const metadata = await extractMetadata(pdfJSMetadata).catch(e => {
    console.error(e)
    throw new Error('Блокчэйн сүлжээнд баталгаажаагүй байна.')
  })
  let pdfString = ArrayBufferToString(pdfArrayBuffer)
  return await _validateInner(metadata, pdfString, pdfJSMetadata)
}

async function _validateInner(metadata, pdfString) {
  let PDFHash = await extractHash(pdfString);
  let isValid = true;
  let result = {
    state: '',
    metadata: metadata,
    cert: {},
    issuer: {},
    isTestnet: true,
  }
  try {
    const isTestnet = metadata['blockchain']['network'] !== 'CorexMain';
    result.isTestnet = isTestnet;
    const smartContractAddress = metadata.blockchain.smartContractAddress;
    const version = metadata['version'];
    const availableContracts = window.env.REACT_APP_AVAILABLE_CONTRACT_ADDRESSES;
    if (!availableContracts.find(x => x.toLowerCase() === smartContractAddress.toLowerCase())) {
      isValid = false;
    } else {
      if (version.includes('university')) {
        return _validateUniversity(PDFHash, metadata, isTestnet);
      }
      const certification = await requestCertificationByHash(PDFHash, smartContractAddress, isTestnet);
      console.log(certification);
      if (certification.hash !== PDFHash) {
        isValid = false;
      } else {
        if (certification.isRevoked) {
          result.state = 'REVOKED';
        } else {
          const expireDate = parseInt(certification.expiredAt) * 1000 || 0;
          const now = new Date().getTime();
          if (expireDate !== 0 && now > expireDate) {
            result.state = 'EXPIRED';
          } else {
            result.state = 'ISSUED';
          }
        }
        result.cert = certification;
        try {
          result.issuer = await requestIssuerByAddress(certification.issuer, isTestnet);
        } catch (e) {
          isValid = false;
          console.error(e);
        }
      }
    }
  } catch (e) {
    console.error(e)
    throw new Error('Баталгаажуулах явцад алдаа гарлаа.')
  }
  if (!isValid) {
    throw new Error('Блокчэйн сүлжээнд баталгаажаагүй байна.')
  }
  return result;
}

async function _validateUniversity(PDFHash, metadata, isTestnet) {
  const univMeta = jsonWrap(metadata['univ_meta'])
  let result = {
    state: '',
    metadata: metadata,
    cert: {},
    issuer: {},
    isTestnet: isTestnet,
    isUniversity: true,
  }
  const utf8 = require('utf8');
  const x = utf8.encode(univMeta)
  const metaHash = await extractHash(x);
  const certInfo = await requestUniversityCertByHash(PDFHash, metadata.blockchain.smartContractAddress, true);
  if (certInfo.cert.metaHash.toLowerCase() !== metaHash.toLowerCase()) {
    throw new Error('Блокчэйн сүлжээнд баталгаажаагүй байна.');
  }
  console.log('Hash matched');
  console.log(certInfo);
  if (!certInfo.approveInfo.isApproved) {
    throw new Error('Блокчэйн сүлжээнд баталгаажаагүй байна.');
  }
  console.log('Approve passed');

  if (certInfo.revokeInfo.isRevoked) {
    result.state = 'REVOKED';
  } else {
    const expireDate = parseInt(certInfo.cert.expiredAt) * 1000 || 0;
    const now = new Date().getTime();
    if (expireDate !== 0 && now > expireDate) {
      result.state = 'EXPIRED';
    } else {
      result.state = 'ISSUED';
    }
  }
  result.cert = certInfo.cert;

  try {
    result.issuer = await requestIssuerByAddress(certInfo.cert.issuer, isTestnet);
  } catch (e) {
    console.error(e);
    throw new Error('Блокчэйн сүлжээнд баталгаажаагүй байна.');
  }
  // үндсэн сүлжээнд зөвхөн баталгаажсан байгууллагын мэдээллийг хүчинтэй харуулна
  if (!isTestnet && !result.issuer.isActive) {
    throw new Error('Блокчэйн сүлжээнд баталгаажаагүй байна.');
  }

  return result;
}
