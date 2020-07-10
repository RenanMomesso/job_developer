const API = 'http://localhost:8000/api'


export const signup = (form) => {
    return fetch(`${API}/signup`, {
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type": "application/json"
            
        },
        body:JSON.stringify(form)
    }).then(response =>{
        return response.json()
    }).catch((err)=>{
        console.log(err)
    })
}

export const signin = (form) => {
    return fetch(`${API}/signin`, {
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type": "application/json"
            
        },
        body:JSON.stringify(form)
    }).then(response =>{
        return response.json()
    }).catch((err)=>{
        console.log(err)
    })
}

export const read = (userId) => {
    return fetch(`${API}/user/read/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        // Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };