import CryptoJS from "crypto-js";
const useEncryption = (key)=>{
 const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
};
const decryptData = (encryptedData) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};
return {
    encryptData,
    decryptData
}
}


export default useEncryption





