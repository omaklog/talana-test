export default function ({$axios, redirect, store}, inject) {

  const resolveMessageError = (errors) =>{
    let errorsCad = ''
    for (const key in errors) {
      errorsCad += errors[key][0]
    }
    return errorsCad;
  }

  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      }
    }
  })

  api.onRequest((config) => {

  })

  api.onError(({ response }) => {
    return new Promise((resolve, reject) => {

      const code = parseInt(response.code || response.status)

      resolve({
        success: false,
        message:  response.data.error ? response.data.error.message : response.data.message,
        data: error.response.data.error
      });

    })
  })

  api.onResponse(response => {
    return new Promise((resolve, reject) => {
      resolve(response);
    })
  });

  api.send = (path, method = 'GET', params = null, body = null) => {

    return new Promise((resolve, reject) => {

      if (params !== null) {
        let query = Object.keys(params)
          .map( k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]) )
          .join("&");
        path = `${path}?${query}`;
      }

      api[method.toLowerCase()](path, body).then(response => {
        if (process.env.dev) {
          console.log("onResponse axios api--->1...", response)
        }
        try {
          resolve (response)
        } catch (e) {
          reject({message: e, success: false, data: null})
        }
      });
    });

  }

  inject('api', api)

}
