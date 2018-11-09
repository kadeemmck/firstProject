let userName = prompt("what is your name?");
if (userName.length % 2 == 0) {
    document.write("even");
}
else if (userName.length % 2 != 0) {
    document.write("odd");
}