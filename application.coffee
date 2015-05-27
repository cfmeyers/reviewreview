$(document).ready ->
    baseURL = 'api/reviews'
    $searchBox = $('#searchBox')
    $submitButton = $('#submit')
    $submitButton.click (event) ->
        event.preventDefault()
        query = $searchBox.val()
        $.get baseURL + '?genre=' + query, (data) ->
            console.log data
    



