let books = document.getElementsByClassName('book');
let total = '$200000';
for (let i = 0; i < books.length; i++) {
    books[i].onclick = function() {
        window.location.href = "total.html";
        localStorage.setItem("totall", total); 
    };
}
