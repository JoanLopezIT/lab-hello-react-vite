import IronhackLogo from './../assets/ironhack-logo-xs-dark.png'
import menuImg from './../assets/menu-top-xs-dark.png'

function Nav(){
return( 
<nav className="nav">
            <img className='navIcon' id='logoLeft'  src={IronhackLogo} alt="Ironhack logo" />
            <img className='navIcon' id='logoRight' src={menuImg} alt="menu Img" />
</nav>

 )}

export default Nav