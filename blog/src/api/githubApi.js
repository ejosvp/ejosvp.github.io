import axios from 'axios';
import config from '../config';

export function getFileNames(callback) {
  const request = `https://api.github.com/repos/${config.github.user}/${config.github.repo}/contents/posts`;
  axios.get(request).then(response => callback(response.data));
}

export function getFile(name, callback) {
  const request = `http://ejosvp.tech/posts/${name}`;
  axios.request({
    url: request,
    responseType: 'text',
  }).then(response => callback(response.data));
}
