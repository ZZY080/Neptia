import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '@assets/icon.png';
import '@component/layout/Header/Header.css';
const Header = () => {
  const [menuData] = useState([
    { id: 1, tag: '关于我们', path: 'about' },
    { id: 3, tag: '开放', path: 'open' },
    { id: 4, tag: '产品', path: 'product' },
  ]);
  const [expanded, setExpanded] = useState(false);
  const [activePath, setActivePath] = useState<string>('about');
  const navigate = useNavigate();
  const handleMenuClick = (path: string) => {
    navigate(path);
    setActivePath(path); // 设置当前激活路径
    setExpanded(false);
  };
  return (
    <Navbar
      expand="sm md lg"
      fixed="top" // 固定在顶部
      className="bg-white p-0 m-0"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      style={{ zIndex: 100 }}
    >
      <Container className="bg-transparent p-e-5 m-0">
        <Navbar.Brand
          className="d-flex flex-row align-items-center"
          onClick={() => handleMenuClick('/home')}
        >
          <img src={logo} alt="" style={{ height: '60px' }} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav  shadow-none"
          style={{
            border: 'none',
            boxShadow: 'none',
            padding: 0,
          }}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuData.map((item) => {
              return (
                <Nav.Link
                  key={item.id}
                  className={activePath === item.path ? 'active-tab' : ''}
                  onClick={() => handleMenuClick(item.path)}
                >
                  {item.tag}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
