//Create a Navigation component that contains links styled like a navbar.
//The links don't have to go anywhere.
//Put the Navigation component at the top of the page and the LoginForm in the center of the page.

function Nav(){  //creates the navigation bar 
return(
    <nav className="navBar"> 
        <ul>
            <li>
                <navlink to="/">
                Home
                </navlink>
                </li>
            <li>
                <navlink to="/">
                Projects
                </navlink>
            </li>
            <li>
                <navlink to ="/">
                    Contact
                </navlink>
                </li>
        </ul>
    </nav>
);//creates the list of things in the nav bar by maiking their own div need return for them to show up in the webpage

}

export default Nav;//exports the function out. react would not run without it 
