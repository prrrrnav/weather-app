
 function Navbar(){
    return (
        <div className="nav-bar">
            <img id="logo" src="/Logos/shoppingBasket.svg" alt="logo" />
            <ul className="link-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <ul className="right-nav">
                <input type="text" placeholder="Search.."/>
                <div className="vr"/>
                <li><img className="profile" src="/Logos/profile.svg"/></li>
            </ul>
        </div>
    )
 }

 export default Navbar;