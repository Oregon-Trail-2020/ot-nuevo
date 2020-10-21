function checkCompleted(landmark) {
    const span = document.createElement('span');
    span.classList.add('location');
    span.classList.add('completed');

    span.style.top = landmark.map.top;
    span.style.left = landmark.map.left;

    span.textContent = landmark.title;
    return span;
}

export default checkCompleted;