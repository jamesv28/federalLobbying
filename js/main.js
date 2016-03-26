$(document).on('ready', function() {
   console.log('sanity check');


    var request = $.ajax({
        method: 'GET',
        url: 'https://api.open.fec.gov/v1/elections/?election_full=true&page=1&office=president&cycle=2016&per_page=20&api_key=NBb0tBT0yOZcaz2kD9qXjrAbFqpEMCUOSxE7cY55&sort=-total_receipts',
        //dataType: 'jsonp'

    });

    request.done(function(data) {
        console.log(data);
    });
});
