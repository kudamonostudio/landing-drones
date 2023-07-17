import React from "react";
import { FooterContainer, Kudamono } from "./Footer.styled";

function Footer() {
  return (
    <FooterContainer>
      <ul>
        <a href="#our-services">Our Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#clients">Clients</a>
        <a href="http://wa.me/+64283967762" target="blank">
          Contact Us
        </a>
      </ul>
      <Kudamono>
        <small>
          <i>
            Developed by{" "}
            <a href="https://www.linkedin.com/in/martin-gamboa-dinardi/">
              Martín Gamboa Dinardi{" "}
            </a>
            @2023
          </i>
        </small>
      </Kudamono>
    </FooterContainer>
  );
}

export default Footer;
