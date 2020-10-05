  
import TokenService from '../Services/token-service'
import config from '../config'

const LanguageApiService = {
  getUsersLanguage(){
    return fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })  
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  getLanguageWords(wordsId){
    return fetch(`${config.API_ENDPOINT}/language/`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })  
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
 
}

export default LanguageApiService