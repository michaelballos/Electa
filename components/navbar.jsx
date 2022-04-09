

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Candidates</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Candidates</NavLink>
            </NavItem>            
            <NavItem>
              <NavLink href="/components/">Candidates</NavLink>
            </NavItem>
}