$(document).ready(function () {


    $("#searchBtn").on("click", function () {
        //alert('clicked');

        let apiKey = '5Y5P8FXEaJnj3BJOrFf1yHrmdzsPewAH';

        let query = 'corona';
  
        var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`

        let starYear = '';//$().val();

        let endYear = ''; //$().val();
 

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function (response) {
                console.log(response);
                var results = response.response;
                console.log(results);

                for (var i = 0; i < results.length; i++) {
                //     var gifDiv = $("<div>");

                //     var rating = results[i].rating;

                //     var p = $("<p>").text("Rating: " + rating);

                //     var personImage = $("<img>");
                //     personImage.attr("src", results[i].images.fixed_height.url);

                //     gifDiv.prepend(p);
                //     gifDiv.prepend(personImage);

                //     $("#gifs-appear-here").prepend(gifDiv);
                }
            });
    });



});