const alphaNumeric = new RegExp(/^\w+$/)
const form = Array.from(document.forms['myForm'].elements)
form.shift()
form.pop()
form.pop()
form.pop()

const onSubmit = (event) => {
    event.preventDefault()
    form.forEach(entry => {
        if (entry.value.startsWith('_') || entry.value.startsWith('-') || entry.value.startsWith('+')) {
            alert(`You cannot use '+, -, _' at the start`)
            return
        }

        if (!alphaNumeric.test(entry.value)) {
            alert(`No special characters`)
            return
        }
    })
    document.forms['myForm'].reset()
    alert('form submitted')
}