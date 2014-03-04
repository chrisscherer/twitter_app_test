$(function() {
    $('#tweet').on('submit', function(event) {
        event.preventDefault();

        var tweet = $('#tweet_text').val();

        $('#tweet_text').prop('disabled', true);
        $('#tweet_submit').prop('disabled', true);

        alert('Tweet is being sent!');

        $.ajax({
            type: "post",
            url: '/',
            data: tweet,
            success: function() {
                alert('Tweeted successfully');
            };
        })
    });
});
