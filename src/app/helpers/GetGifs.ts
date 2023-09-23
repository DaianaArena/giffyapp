const getGiphs = async (category: string) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=q6MfzmZ0iGhmi7VUvWDN6D417OQhuSt6&q=${category}&limit=10`;
    const res = await fetch(url);
    const {data} = await res.json()
    

    const gifs = data.map((gif:any) =>({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    })
    )

    

    return gifs;
}
export default  getGiphs