fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => {
        return response.json()
    })
    .then(jsonResult => {
        console.log(jsonResult.message);
    })