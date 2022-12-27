export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('local_token'));

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user };
  } else {
    return {};
  }
}