const form = document.querySelector('.form')
const animes = document.querySelector('.container__giphys')


form.addEventListener('submit',async event => {
    event.preventDefault()
    const valueSeach = event.target.search.value;
    const {data} =  await getGifhy(valueSeach)
    animes.innerHTML =''
    data.forEach(gifhy => animes.innerHTML += `<div class='img'><h3 class='gifhy__titulo'>${gifhy.title}</h3>
    <img class="gif" src="https://i.giphy.com/${gifhy.id}.gif" alt=""></div>`)})
