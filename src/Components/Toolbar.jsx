import styled from "styled-components";

const NavbarCSS = styled.div`
  background: ${(props) => props.background};
  border: 1px solid red;
  width: 85%;
  height: 80px;
  margin: auto;
  display: flex;
  padding: 50px;
  flex-direction: row-reverse;
  gap: 1%;
`;
const Navbar = ({ children, background }) => {
  return <NavbarCSS background={background}>{children}</NavbarCSS>;
};

const NavElementCSS = styled.div`
  background: ${(props) => props.background};
  cursor: pointer;
  color: #ffffff;
  position: relative;
  top: 12px;
  width: auto;
  height: 38px;
  padding: 18px 12px 0px 12px;
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  float: ${(props) => (props.float === "right" ? "right" : "left")};
  :nth-child(1):hover {
    background: aqua;
    color: black;
  }
  :nth-child(2):hover {
    background: aqua;
    color: black;
  }
  :nth-child(3):hover {
    background: aqua;
    color: black;
  }
  :nth-child(4):hover {
    background: aqua;
    color: black;
  }

  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;
const NavElement = ({ children, floating, background }) => {
  return (
    <NavElementCSS background={background} float={floating}>
      {children}
    </NavElementCSS>
  );
};

const SitenameCSS = styled.img`
  width: 80px;
  height: 65px;
  margin-right: 35%;
  position: relative;
  top: 8px;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Sitename = ({ src, alt }) => {
  return <SitenameCSS src={src} alt={alt}></SitenameCSS>;
};

function Toolbar() {
  return (
    <>
      <Navbar background="black">
        <NavElement floating="right">About</NavElement>
        <NavElement floating="right">Resoures page</NavElement>
        <NavElement floating="right">Learn</NavElement>
        <NavElement background="aqua" floating="right">
          TRY VEDAS
        </NavElement>
        <Sitename src="https://ph7it.csb.app/logo.png"></Sitename>
      </Navbar>
    </>
  );
}

export default Toolbar;
