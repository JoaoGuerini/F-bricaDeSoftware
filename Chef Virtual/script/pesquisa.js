function openModal() {
    document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

function selectRating(rating) {
    console.log("Nota selecionada: " + rating);
}
