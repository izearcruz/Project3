var giphyApiKey = "QR4xjgi6862b5aSkiy37gA4fdGW6QK1P";

function sendApiRequest(){
  var input = document.getElementById("input").value;

  if (input === ""){return; }

  var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${giphyApiKey}`;

  fetch(giphyApiUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    var img = document.createElement("img");
    console.log(json.data[0].images.fixed_height.url);

    img.src = json["data"][0]["images"]["fixed_height"]["url"];
    document.body.appendChild(img);
  })
}
