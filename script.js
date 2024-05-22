function toggleDescription(element) {
    var description = element.querySelector('p');
    if (description.style.display === 'none') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}
