var collectionItemTemplate =
  '<div class="collection-album-container column fourth">'
  +' <img src="assets/images/album_covers/01.png"/>'
  +' <div class="collection-album-info caption">'
  +'   <p>'
  +'     <a class="album-name" href="album.html"> The Colors </a>'
  +'     <br/>'
  +'     <a href="album.html"> Pablo Picasso </a>'
  +'     <br/>'
  +'     X songs'
  +'     <br/>'
  +'    </p>'
  +'   </div>'
  +'</div>'
  ;

window.onload = function() {
  //Select the first elements with an album-covers class name and assign it to variable collectionContainer.
  var collectionContainer = document.getElementsByClassName('album-covers')[0];
  //Assign an empty string to collectionContainer's innerHTML to clear its content (clean slate before adding JavaScipt).
  collectionContainer.innerHTML = ' ';
  //Insert the 12 albums
  for (var i=0; i < 12; i++) {
    collectionContainer.innerHTML += collectionItemTemplate;
  }
}
