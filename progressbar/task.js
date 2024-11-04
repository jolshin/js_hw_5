let form = document.querySelector('#form')
let progress = document.querySelector('#progress')
let file = document.getElementById("file").files[0]

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const xhr = new XMLHttpRequest()

    xhr.upload.addEventListener('progress', (e) => {
        progress.value = e.loaded / e.total
    })

    const formData = new FormData(form)

    xhr.open('POST', form.action)

    xhr.send(formData)

})
