export async function getBlogData() {
    return await fetch("http://3.7.81.243:3253/api/blog/")
        .then(response => response.json())
        .then(respValue => respValue)
} 

export async function getfooterData() {
    return await fetch("http://3.7.81.243:3253/api/settings/fetch-frontend-details")
    .then(response => response.json())
    .then(respValue => respValue)
}

export async function setContactData(data) {
   return await fetch('http://3.7.81.243:3253/api/contact/send', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json',
        },
      })
         .then((response) => response.json())
         .then((data) => {
             return data
         })
         .catch((err) => {
            console.log(err.message);
         });
}