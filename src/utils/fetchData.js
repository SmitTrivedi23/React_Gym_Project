export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key':'2a0bdeb98fmsh9c4b9b211a97487p181c42jsn9bee61365307' ,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2a0bdeb98fmsh9c4b9b211a97487p181c42jsn9bee61365307',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  // darshit was here

export const fetchData = async(url,options) =>{
    const response  = await fetch(url,options);
    const data = response.json();
    return data
}
