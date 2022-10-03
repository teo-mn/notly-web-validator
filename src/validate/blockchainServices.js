import allSettled from 'promise.allsettled'
import Web3 from 'web3';
import {abi as CertifyAbi} from './abi/certify';
import {abi as UniversityAbi} from './abi/university';
import {abi as IssuerAbi} from './abi/issuer';

allSettled.shim();

export const requestCertificationByHash = async (hash, contractAddress, isTestnet) => {
  const url = isTestnet ? window.env.REACT_APP_COREXCHAIN_NODE_URL_TESTNET : window.env.REACT_APP_COREXCHAIN_NODE_URL;
  const client = new Web3(url);
  const contract = new client.eth.Contract(CertifyAbi, client.utils.toChecksumAddress(contractAddress));
  return await contract.methods.getCertification(hash).call();
}

export const requestIssuerByAddress = async (addr, isTestnet) => {
  const contractAddress = isTestnet ? window.env.REACT_APP_VERIFIED_ISSUER_ADDRESS_TESTNET : window.env.REACT_APP_VERIFIED_ISSUER_ADDRESS;
  const url = isTestnet ? window.env.REACT_APP_COREXCHAIN_NODE_URL_TESTNET : window.env.REACT_APP_COREXCHAIN_NODE_URL;
  const client = new Web3(url);
  const contract = await new client.eth.Contract(IssuerAbi, client.utils.toChecksumAddress(contractAddress));
  return await contract.methods.getIssuer(client.utils.toChecksumAddress(addr)).call();
}

export const requestUniversityCertByHash = async (hash, contractAddress, isTestnet) => {
  const url = isTestnet ? window.env.REACT_APP_COREXCHAIN_NODE_URL_TESTNET : window.env.REACT_APP_COREXCHAIN_NODE_URL;
  const client = new Web3(url);
  const contract = new client.eth.Contract(UniversityAbi, client.utils.toChecksumAddress(contractAddress));
  const cert = await contract.methods.getCertification(hash).call();
  const revokeInfo = await contract.methods.getRevokeInfo(hash).call();
  const approveInfo = await contract.methods.getApproveInfo(hash).call();
  return {
    cert, revokeInfo, approveInfo
  }
}
