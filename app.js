$(document).ready(function () {


    $("#searchBtn").on("click", function () {
        //alert('clicked');

        
 

        function displayArticlesInfo()

        var articles = $(this).attr("data-name");

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${" + searchTerm + "}&api-key=${5Y5P8FXEaJnj3BJOrFf1yHrmdzsPewAH}";

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