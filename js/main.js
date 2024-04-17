window.onload = async function() {
    let rslt = await fetch("/js/data.json")
    let data = await rslt.json()
    console.log(data)
};