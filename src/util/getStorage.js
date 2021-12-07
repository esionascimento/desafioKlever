function getStorage() {
  const storage = JSON.parse(localStorage.getItem('token'));
  if (storage) {
    console.log(storage);
  }
}

export default getStorage;
