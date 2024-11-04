function getJSON(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.responseType = 'json'
    xhr.onload = function() {
        const status = xhr.status
        if (status === 200) {
            callback(null, xhr.response)
        } else {
            callback(status, xhr.response)
        }
    }
    xhr.send()
}

getJSON('https://students.netoservices.ru/nestjs-backend/poll',
    function(err, data) {
        if (err !== null) {
            alert('Ошибка ' + err);
        } else { 
        document.querySelector('#poll__title').textContent = data.data.title
        for (answer of data.data.answers) {
            const btn = `<button class="poll__answer">
                            ${answer}
                        </button>`
            document.querySelector('#poll__answers').insertAdjacentHTML('beforeend', btn)
                        
        }
    }
      
})

document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        alert('Спасибо, ваш голос засчитан!')
    }
})
