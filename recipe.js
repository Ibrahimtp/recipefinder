const rapidApikey = window.APP_CONFIG.RAPIDAPI_KEY
const pexelApiKey = window.APP_CONFIG.PEXELS_API_KEY



 async function getRecipeRecommendations(){
    const options = {
        method: 'GET',
        url: 'https://all-in-one-recipe-api.p.rapidapi.com/recommendations/10235',
        headers: {
          'x-rapidapi-key': rapidApikey,
          'x-rapidapi-host': 'all-in-one-recipe-api.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
         return response
      } catch (error) {
          console.error(error);
      }
}




async function getRecipeImage(query){
   const imageUrls = await  axios.get('https://api.pexels.com/v1/search?query=pasta',{
        headers: {
          Authorization: pexelApiKey
        },
        params: {
          query: query,
          per_page: 1
        }})

        return imageUrls
}



getRecipeRecommendations().then((response)=>{
    
    const recipes = response.data.recommendations.data
    recipes.forEach((recipe,index) => {
        getRecipeImage(recipe.name).then((results)=>{
            console.log(results)
            recipes[index].photo = results.data.photos[0].url
            if(index+1==recipes.length){
                setTimeout(() => {
                        console.log(recipes,'ppppppp')
                        displayRecipes(recipes);
                    
                },1000);
            }
        })
    });
    
    
   
})