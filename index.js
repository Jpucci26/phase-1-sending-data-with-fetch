function submitData(nameInput, userInput) {
    const formData= {
        name: nameInput,
        email: userInput
    }
    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)

    })
    .then(jsonResponse => jsonResponse.json())
    .then(objectToDom => document.body.innerHTML = objectToDom.id)

    .catch(errorMessage => document.body.innerHTML= errorMessage)

 }
