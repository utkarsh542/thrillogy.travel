import React ,{ useState }from "react";
import "./navBar.css";

const NavBar = () => {
  const [navBar, setNavBar] = useState(true);


  return (
    <div className="navBar">
      <div className="navBarLeft">
        <div className="navBarTitle">Thrillogy.travel</div>
      </div>
      {navBar && 
      <nav className="navBarSection">
        <div className="navBarCenter">
          <ul className="navBarCenterMenu">
            <li className="navBarCenterItem">Home</li>
            <li className="navBarCenterItem">Package</li>
            <li className="navBarCenterItem">
              <label htmlFor="package">Trips</label>
              <select name="package" id="package" className="dropdownSelect">
                <option className="dropDownItem" value="Wild Exploration(Tranding)">Wild Exploration(Tranding)</option>
                <option className="dropDownItem" value="Trekking Himalya">Trekking Himalya</option>
                <option className="dropDownItem" value="Jungle Camping">Jungle Camping</option>
                <option className="dropDownItem" value="River Rafting">River Rafting</option>
                <option className="dropDownItem" value="Indie Island">Indie Island</option>
              </select>
            </li>
            <li className="navBarCenterItem">Blog</li>
            <li className="navBarCenterItem">About</li>
            <li className="navBarCenterItem">Sign Out</li>
          </ul>
        </div>
        <div className="navBarRight">
          <ul className="navBarRightManu">
            <li className="navBarRightItem">Sign In</li>
            <li className="navBarRightItem">Sign Up</li>
          </ul>
        </div>
      </nav>
      }
      <div className="menubutton"  onClick={() => setNavBar(!navBar)}>
      {navBar ? <i class="menuBarIcon fa-solid fa-xmark "  ></i>  : <i class="menuBarIcon fa-solid fa-bars " ></i>}
      
      </div>
    </div>
  );
};

export default NavBar;
