const form = document.querySelector('.form')
const animes = document.querySelector('.container__giphys')

const showGifs = data => {
    data.forEach(({id,title}) => animes.innerHTML += `<div class='img'><h3 class='gifhy__titulo'>${title}</h3>
    <img class="gif" src="https://i.giphy.com/${id}.gif" alt=""></div>`)
}
form.addEventListener('submit',async event => {
    event.preventDefault()
    const valueSeach = event.target.search.value;

    const {data} =  await getGifhy(valueSeach)
    animes.innerHTML =''
    showGifs(data)
})
