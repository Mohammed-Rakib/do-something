// button 
const saveToFavorite = () => {
    const bookName = getInputValue('book-title');
    const bookAuthor = getInputValue('book-author');
    const publishedYear = getInputValue('book-published-year');
    // catch empty input
    catchEmptyInput(bookName, bookAuthor, publishedYear);
    // show to the UI
}
// get input 
const getInputValue = (id) => {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    if (inputFieldValue.length > 0) {
        return inputFieldValue;
    }
};

// handle empty input submit
const catchEmptyInput = (title, author, time) => {
    if (title == undefined || time == undefined || author == undefined) {
        alert('Information incomplete')
    } else {
        displayBooks(title, author, time)
    }
};

// // show to the screen
const displayBooks = (title, author, time) => {
    const table = document.getElementById('table');
    table.style.display = 'block';
    const tableBody = document.getElementById('book-information');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${time}</td>
    `;
    tableBody.appendChild(tr);
}
