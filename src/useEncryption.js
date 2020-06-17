import CryptoJS from "crypto-js";

const useEncryption = (key) => {
  const encryptData = (data) => {
    let dataToBeEncrypted;
    if (typeof data === "string") dataToBeEncrypted = data;
    else if (typeof data === "number") dataToBeEncrypted = data.toString();
    return CryptoJS.AES.encrypt(dataToBeEncrypted, key).toString();
  };

  const decryptData = (encryptedData) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  };
  return {
    encryptData,
    decryptData,
  };
};

export default useEncryption;
