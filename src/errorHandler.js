export default function errorHandler(code) {
  switch (code.status) {
    case 401:
      break;
    case 400:
    case 403:
    case 404:
      break;
    default:
      break;
  }
}
