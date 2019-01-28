var http = {
  async post(url, params) {
    return await new Promise((resolve, reject) => {
      fetch(url, {
        method: 'post',
        body: params || {},
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  },
  async get(url, params) {
    if (typeof params === 'object') {
      const _url = [];
      for (const key in params) {
        _url.push(`${key}=encodeURIComponent(${params.key})`);
      }
      url += '?' + _url.join('&');
    }
    return await new Promise((resolve, reject) => {
      fetch(url, {
        method: 'get',
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  },
};
