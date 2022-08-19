// iife to use async await
(async () => {
    //update table whenever json data gets updated
    let current = null, previous = null
    setInterval(async () => {
        const json = await (await fetch('./data.json')).json()
        current = JSON.stringify(json)
        if (previous && current && previous !== current) {
            location.reload()
        }
        previous = current
    }, 2e3)

    //Dynamic table generation
    const data = await (await fetch('./data.json')).json()

    const tableHeaders = data.shift()

    const table = document.querySelector('#table')
    const thead = table.appendChild(document.createElement('thead'))
    const tbody = table.appendChild(document.createElement('tbody'))

    tableHeaders.forEach(heading => {
        thead.appendChild(document.createElement('th'))
            .append(heading)
    })

    data.forEach(row => {
        let tr = tbody.appendChild(document.createElement('tr'))
        row.forEach(entry => {
            tr.appendChild(document.createElement('td'))
                .append(entry)
        })
    })

})()