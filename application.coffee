baseURL = 'https://marginal-review-api.herokuapp.com/api/v1/reviews'



$(document).ready ->


    $contentDiv = $('#content')
    $searchBoxGenre = $('#searchBoxGenre')
    $searchBoxTitle = $('#searchBoxTitle')
    $searchBoxAuthor = $('#searchBoxAuthor')
    $submitButton = $('#submit')
    $submitButton.click (event) ->
        event.preventDefault()
        $contentDiv.empty()
        url = buildQuery($searchBoxGenre, $searchBoxTitle, $searchBoxAuthor)
        console.log url
        $.get url, (data) ->
            for item, index in data.results
                if index % 4 == 0
                    if $row?
                        $contentDiv.append($row)
                    $row = $("<div class='row'></div>")

                post_title = item.post_title.split(' ')[0..4].join(' ')
                $item = $("<div class='item col-md-3'>
                            <a target='_blank' href='#{item.post_url}'>
                             <h3 class='itemTitle'>#{post_title}</h3>
                             <img src='#{item.item_image_url_large}' alt='#{item.item_title}'>
                            </a>
                          </div>")
                $row.append($item)
                if index == data.results.length-1
                    $contentDiv.append($row)

                console.log item
    


buildQuery = ($searchBoxGenre, $searchBoxTitle, $searchBoxAuthor) ->
    genre = $searchBoxGenre.val()
    title = $searchBoxTitle.val()
    author = $searchBoxAuthor.val()
    url = baseURL + '?'
    url += 'genre='+genre+'&' if genre isnt ''
    url += 'title='+title+'&' if title isnt ''
    url += 'author='+author+'&' if author isnt ''
    url

