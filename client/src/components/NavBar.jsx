import React from 'react';
import logo from '../assets/a-logo.svg'
import * as Icon from 'react-icons/bs'
import style from '../styles/navbar.module.css'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  render() {
    return (
      <nav className={style.flex}>
        <div className={`${style.flex} ${style.nav_link}`}>
          <p className={style.active}>WOMEN</p>
          <p>MEN</p>
          <p>KIDS</p>
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={`${style.flex} ${style.icon}`}>
          <div className={style.flex}>
            <span>
              <Icon.BsCurrencyDollar />
            </span>
            <span onClick={() => { this.setState({ clicked: !this.state.clicked }) }}>
              {this.state.clicked ? <Icon.BsArrowUpShort />  : <Icon.BsArrowDownShort />}
            </span>
          </div>
          <span>
            <Icon.BsCart2 />
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
