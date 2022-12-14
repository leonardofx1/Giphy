const apiEndPointe = (gifhy) => `https://api.giphy.com/v1/gifs/search?api_key=e42pJ9dSUQivVfs5msvMh9z8oN77VIdz&q=${gifhy}&limit=25&offset=0&rating=g&lang=en`;

const getGifhy = async(search) => {
    try{
        const response = await fetch(apiEndPointe(search))

        if(!response.ok){
            throw new Error('não foi possível obter os dados')
        }
        return response.json()

    }catch({error, message}){
        alert(error, message)
    }

}

