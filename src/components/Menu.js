import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

function Menu(props) {

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);
  const togglePopover = () => setPopoverOpen(!popoverOpen);

  const handleWishListClick = (clickedMovie) => {
    props.handleClickDeleteMovieParent(clickedMovie.movieName);
  }

  let wishListItems = props.wishList.map(movie =>
    <ListGroupItem onClick={() => handleWishListClick(movie)}>
      <img src={movie.movieImg} alt={movie.movieName + ' poster'} style={{ width: '50px', marginRight: '5px' }} />
      {movie.movieName}
    </ListGroupItem>
  );


  return (
    <Navbar color="dark" dark expand="md" className='w-100'>
      <NavbarBrand href="/">
        <img src="/img/logo.png" alt="Mymoviz logo"></img>
      </NavbarBrand>
      <NavbarToggler onClick={toggleCollapse} />
      <Collapse isOpen={isOpen} navbar className="text-center">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/" color="white">Last Releases</NavLink>
          </NavItem>
          <NavItem>
            <Button color="secondary" id="wishlist" type="button">{props.wishList.length} films</Button>
            <Popover placement="bottom" isOpen={popoverOpen} target="wishlist" toggle={togglePopover}>
              <PopoverHeader>Wishlist</PopoverHeader>
              <PopoverBody>
                <ListGroup>
                  {wishListItems}
                </ListGroup>
              </PopoverBody>
            </Popover>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Menu;