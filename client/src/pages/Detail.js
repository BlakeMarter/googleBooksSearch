import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
// import Books from "../pages/Books";

class Detail extends Component {
  state = {
    books: {}
  };

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log(this.state.books);

    API.getBooks()
      .then(res => {
        console.log(res.data);
        this.setState({ books: res.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    console.log(this.state.books.length);


    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron style={{ height: 20 }}>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                    <Container className="mt-2 mb-2">
                      <Row>
                        <Col size="md-3">
                          <img className="mr-2 mt-3 mb-3" src={book.image} alt="" />
                        </Col>
                        <Col size="md-8">
                          <p className="mt-4"><strong>Title:</strong> {book.title}</p>
                          <p><strong>Author(s):</strong> {book.author}</p>

                          <p className="mt-3"><strong>Description:</strong> {book.synopsis}</p>
                          <a href={book.link} target="blank"><button className="btn btn-primary float-right mb-2">More Info</button></a>
                        </Col>
                      </Row>
                    </Container>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
