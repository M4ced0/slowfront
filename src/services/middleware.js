// middleware.js
import Cookie from 'js-cookie';
// import axios from 'axios';
// import store from '../store'

export default {

  async auth(to, from, next) {
    const token = Cookie.get('slow_token');
    const isValid = token ? await isTokenValid() : false;

    if (!token || !isValid) {
      Cookie.remove('slow_token', { path: '' });
      next('/');
    } else {
      next();
    }
  },

  login(to, from, next) {
    const token = Cookie.get('slow_token');
    (token && isTokenValid())
      ? next('/home')
      : setTimeout(() => next(), 0);
  },

};

async function isTokenValid() {
  return true;
  // try {
  //   const response = await axios.get('/validate-token', {
  //       headers: {
  //           Authorization: 'Bearer ' + token

  //       },
  //   });
  //   console.log(response.data.valid)
  //   return response.data.valid;
  // } catch (error) {
  //   console.error('Erro ao verificar token:', error);
  //   return false;
  // }
}
