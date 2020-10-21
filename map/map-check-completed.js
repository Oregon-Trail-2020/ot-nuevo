function checkCompleted(landmarks) {
    const span = document.createElement('span');
    span.classList.add('location');
    span.classList.add('completed');

    span.style.top = landmarks.map.top;
    span.style.left = landmarks.map.left;

    span.textContent = landmarks.title;
    return span;
}

export default checkCompleted;