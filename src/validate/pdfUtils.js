import {bytesToHex} from './hexUtils'

const ArrayBufferToString = arrayBuffer => {
  let binaryString = '',
      bytes = new Uint8Array(arrayBuffer),
      length = bytes.length
  for (let i = 0; i < length; i++) {
    binaryString += String.fromCharCode(bytes[i])
  }
  return binaryString
}

const StringToArrayBuffer = str => {
  let buf = new ArrayBuffer(str.length)
  let bufView = new Uint8Array(buf)
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
}

const extractHash = async (pdfString) => {
  // Turn again into uintarray and calculate the hash
  const uint = StringToArrayBuffer(pdfString)
  const crypto = window.crypto // TODO: use msrCrypto for IE11
  if (!crypto) {
    throw new Error('You are using an unsupported browser. Please use a modern browser like latest Chrome or Firefox.')
  }
  const digest = await crypto.subtle.digest('SHA-256', uint)
  return bytesToHex(new Uint8Array(digest))
}

export {ArrayBufferToString, StringToArrayBuffer, extractHash}
