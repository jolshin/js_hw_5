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

getJSON('https://students.netoservices.ru/nestjs-backend/slow-get-courses',
    function(err, data) {
        if (err !== null) {
            alert('Ошибка ' + err);
        } else { 
            console.log(data)
            console.log(data.response.Valute)
            let currencies = data.response.Valute
            let div = document.querySelector('#items')
            console.log(div)
            for (let [key, value] of Object.entries(currencies)) {
                const el = `<div class="item">
                                <div class="item__code">
                                    ${value.CharCode}
                                </div>
                                <div class="item__value">
                                    ${value.Value}
                                </div>
                                <div class="item__currency">
                                    руб.
                                </div>
                            </div>`
                div.insertAdjacentHTML('beforeend', el)
                document.querySelector('#loader').classList.remove('loader_active')
                            
            }
        }
      
    })