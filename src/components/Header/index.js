// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header">
    <ul className="nav-menu">
      <li>
        <Link exact to="/" className="nav-link">
          Home
        </Link>
        <li>
          <Link exact to="/" className="nav-link">
            About
          </Link>
        </li>
      </li>
    </ul>
  </div>
)

export default Header
