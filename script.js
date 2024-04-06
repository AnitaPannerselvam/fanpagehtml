let isFavorite = false;

document.getElementById('favorite-button').addEventListener('click', function() {
    toggleFavorite();
});

function toggleFavorite() {
    isFavorite = !isFavorite;
    const statusElement = document.getElementById('favorite-status');
    if (isFavorite) {
        statusElement.textContent = 'This book is in your favorites.';
    } else {
        statusElement.textContent = 'This book is not in your favorites.';
    }
}
