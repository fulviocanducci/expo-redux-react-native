import { getStorage } from '../storage';

async function getToken() {
  try {
    return await getStorage('token');
  } catch (error) {
    throw error;
  }
}

export default getToken;
