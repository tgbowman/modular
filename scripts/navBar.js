let navBar = function() {
    let navBarEl = document.getElementById("navBar")
    navBarEl.innerHTML =
    `
    <h1 id="logo">Betsy</h1>
    <ul id="nav">
        <li><a href="#">Categories</a></li>
        <li><a href="#">Orders</a></li>
        <li><a href="#">Log Out</a></li>
    </ul>
    `
}




module.exports = navBar