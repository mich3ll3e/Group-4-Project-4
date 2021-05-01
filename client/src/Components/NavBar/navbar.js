import React from 'react';

function navBar () {
<Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#gallery">Gallery</Nav.Link>
      {/* <Nav.Link href="#pricing"></Nav.Link> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Username" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
}

export default navBar 