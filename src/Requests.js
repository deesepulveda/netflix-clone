const apiKey = "4fc1423a755c3f0d160a053a9ab92159";
const baseURL = "https://api.themoviedb.org/3/";

const requests = {
  requestPopular: `${baseURL}movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  requestTopRated: `${baseURL}movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  requestTrending: `${baseURL}movie/popular?api_key=${apiKey}&language=en-US&page=2`,
  requestHorror: `${baseURL}search/movie?api_key=${apiKey}&language=en-US&query=horro&page=1`,
  requestUpcoming: `${baseURL}movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
};

export default requests;
