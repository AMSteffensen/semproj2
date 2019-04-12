var rotatingSquare = document.getElementById("web-animation");
rotatingSquare.animate(
    [
        { backgroundColor: '#000000' },
        { backgroundColor: '#440000' },
        { backgroundColor: '#000000' }
    ],
    {
        duration: 1000,
        iterations: 7
    }
)
