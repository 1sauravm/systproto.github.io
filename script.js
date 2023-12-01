function navigate(page) {
    // Hide all pages
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    // Show the selected page
    document.getElementById(page).style.display = 'block';
}

// Initial navigation to the home page
navigate('home');
