import axios from 'axios';
import config from '../config';

function fetch(request, callback) {
  axios.get(request)
    .then(response => {
      callback(response.data);
    });
}

export function getFiles(callback) {
  const request = `https://api.github.com/repos/${config.github.user}/${config.github.repo}/contents/posts`;
  fetch(request, callback);
}

export function getFile(callback) {
  const request = `https://api.github.com/repos/${config.github.user}/${config.github.repo}/contents/posts`;
  fetch(request, callback);
}
