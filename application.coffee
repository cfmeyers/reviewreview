$(document).ready ->
    baseURL = 'https://marginal-review-api.herokuapp.com/api/v1/reviews'
    $searchBox = $('#searchBox')
    $submitButton = $('#submit')
    $submitButton.click (event) ->
        event.preventDefault()
        query = $searchBox.val()
        $.get baseURL + '?genre=' + query, (data) ->
            console.log data
    



