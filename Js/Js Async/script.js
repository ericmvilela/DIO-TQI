async function buscaJoke()
{
    paragraph = document.querySelectorAll('.jokeTxt')
    
    for(let i = 0; i < paragraph.length; i++)
    {
        await fetch('https://api.chucknorris.io/jokes/random')
            .then((response) => response.json())
            .then((response) => paragraph[i].innerText = response.value)
    }

}

window.onload = buscaJoke