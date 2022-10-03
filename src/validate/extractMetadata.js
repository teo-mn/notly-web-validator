const defaultResponse = {
  issuer: {
    name: "",
    address: ""
  },
  info: {
    name: "",
    desc: "",
    cerNum: "",
    additionalInfo: ""
  },
  version: "",
  blockchain: {
    network: "",
    smartContractAddress: ""
  },
  univ_meta: {}
}

const extractMetadata = async pdfInfo => {
  // Extracts the relevant metadata of the vPDF from
  // the PDFJS parsed metadata
  const pdfCustomMetadata = pdfInfo.info.Custom
  const verifymn = pdfCustomMetadata.verifymn;
  if (!verifymn) {
    return defaultResponse;
  }
  return JSON.parse(verifymn);
}

export default extractMetadata
