import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container } from "./styles";
import logoImg from "../../assets/Logo.svg";
import basketImg from "../../assets/basket.svg";

const Nav: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <ul>
        <li>
          {" "}
          <img src={logoImg} alt="Little Lemon Logo" />{" "}
        </li>
        <li>
          {" "}
          <HashLink to="/Little-lemon">Home</HashLink>{" "}
        </li>
        <li>
          {" "}
          <HashLink to="/Little-lemon/#about">About</HashLink>{" "}
        </li>
        <li>
          {" "}
          <HashLink to="/Little-lemon/#menu">Menu</HashLink>{" "}
        </li>
        <li>
          {" "}
          <HashLink to="/Little-lemon/bookings">Reservations</HashLink>{" "}
        </li>
        <li className="orderBtn">
          {" "}
          <HashLink role="button" to="#">
            Order Online
          </HashLink>{" "}
        </li>
        <li>
          {" "}
          <img className="basketIcon" src={basketImg} alt="Basket" />{" "}
        </li>
      </ul>
    </Container>
  );
};

export default Nav;
