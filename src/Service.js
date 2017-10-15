import fetch from 'isomorphic-fetch'

export const Service = {
  fetch(opt = {}) {
    const url = `https://randomuser.me/api/?page=${opt.page}&results=12`

    return fetch(url)
      .then(response => {
        if (response.status >= 400) {
          throw new Error(`Bad response from server on ${url}`)
        }
        return response.json()
      })
  },
}
