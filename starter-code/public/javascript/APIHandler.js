class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = "http://localhost:8000";
  }

  getFullList () {
    return axios
    .get(this.BASE_URL + '/characters')
    .then(response => Promise.resolve(response.data));
    
  }

  getOneRegister () {
    return axios
    .get(this.BASE_URL + `/characters/${id}`)
    .then(response => Promise.resolve(response.data));
    
  }

  createOneRegister () {
    return axios
    .post(this.BASE_URL + '/character', {
        ...data,
        id: Math.floor(Math.random() * 100000)
    })
    .then(response => Promise.resolve(response.data));
    
  }

  updateOneRegister () {
    return axios
    .delete(this.BASE_URL + `/character/${id}`)
    .then(response => Promise.resolve(response.data));
    
  }

  deleteOneRegister () {
    return axios
    .patch(this.BASE_URL + `/cities/${id}`, data)
    .then(response => Promise.resolve(response.data));
    
  }
}
