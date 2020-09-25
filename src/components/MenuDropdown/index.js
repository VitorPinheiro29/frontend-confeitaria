import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import './styles.css';

import { FcViewDetails } from 'react-icons/fc';
import { GiCakeSlice } from 'react-icons/gi';
import { BsStarFill, BsPencil } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';


const MenuDropdown = () => {
    return(
        <div className="menu-bar">
        <Dropdown className="button-style">
          <Dropdown.Toggle id="dropdown-basic" className="toggle-button">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/receitas" className="menu-dropdown">
              Receitas <FcViewDetails size={24} className="recipeIcon" />
            </Dropdown.Item>
            <Dropdown.Item href="/confeiteiros">
              Confeiteiros{' '}
              <GiCakeSlice size={24} color="red" className="cakeIcon" />
            </Dropdown.Item>
            <Dropdown.Item href="/favorites">
              Favoritos{' '}
              <BsStarFill size={24} color="yellow" className="favoriteIcon" />
            </Dropdown.Item>
            <Dropdown.Item href="/parcerias">
              Parcerias{' '}
              <FaUserFriends
                size={24}
                color="green"
                className="communityIcon"
              />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
}

export default MenuDropdown;