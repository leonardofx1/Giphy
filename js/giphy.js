const apiEndPointe = (gifhy) => `https://api.giphy.com/v1/gifs/search?api_key=e42pJ9dSUQivVfs5msvMh9z8oN77VIdz&q=${gifhy}&limit=25&offset=0&rating=g&lang=en`;
const getGifhy = async() => {
    const response = await (await fetch(apiEndPointe('naruto'))).json()
    console.log(response)
}
getGifhy()