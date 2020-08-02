
const fileUploader = (file) => new Promise((resolve, reject) => {
  try {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    return null;
  } catch (e) {
    return reject();
  }
});

export default fileUploader;
