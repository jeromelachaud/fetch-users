import fetch from 'isomorphic-fetch'

export default function fetchUsers() {
  const url = 'https://randomuser.me/api/?results=10'
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      this.setState({
        isLoading: false,
        users: res.results,
        // page: res.info.page,
      })
    })
    .catch(error => {
      throw new Error(error)
    })
}
