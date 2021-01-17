var Crawler = {
	request : null,
	cheerio : null,
	fs      : null,
	init : function(){
		Crawler.request = require('request');
		Crawler.cheerio = require('cheerio');
		Crawler.fs      = require('fs');
		Crawler.getMovies();
	},
	getMovies: function(){
        var url = 'http://www.imdb.com/chart/moviemeter';
		Crawler.request(url, function(err, res, body){
			if(err)
				// console.log('Error: ' + err);
			var $ = Crawler.cheerio.load(body);
			$('.lister-list tr').each(function(){
				var title  = $(this).find('.titleColumn a').text().trim();
				var rating = $(this).find('.imdbRating strong').text().trim();
				console.log(title + ' - ' + rating);
				Crawler.fs.appendFile('imdb.txt', title + ' ' + rating + '\n', function (err) {
                    if (err) throw err;
                    console.log('success!');
                });
			});
		});
	}
};
Crawler.init();