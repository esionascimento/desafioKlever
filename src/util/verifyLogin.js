import { authenticate } from '../services/fetchActions';

async function auth() {
  let data;
  try {
    const token = localStorage.getItem('token');
    if (token) {
      data = await authenticate({ token });
      if (data.data.auth) {
        return true;
      }
    }
  } catch (err) {
    return false;
  }
}

export default auth;