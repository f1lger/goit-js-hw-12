export function getMarkup(data) {
  return data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="card-item">
  <a href=${largeImageURL}
    ><img src=${webformatURL} alt="${tags}" height="200"/>
    <ul class="card-info">
      <li>
        Likes
        <p>${likes}</p>
      </li>
      <li>
        Views
        <p>${views}</p>
      </li>
      <li>
        Comments
        <p>${comments}</p>
      </li>
      <li>
        Downloads
        <p>${downloads}</p>
      </li>
    </ul></a
  >
</li>`
    )
    .join('');
}
