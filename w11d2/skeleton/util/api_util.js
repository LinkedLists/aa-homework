const { $CombinedState } = require("redux")

export const fetchSearchGiphys = (searchTerm) => {
  $.ajax({
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=u2XUDKI3ZuZrY9RXfHw35egvUdvm335B&limit=2`,
    method: "GET"
  })
}