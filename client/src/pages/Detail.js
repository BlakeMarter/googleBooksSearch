import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    // console.log(this.state.books);

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
                          <img className="mr-2" src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                        </Col>
                        <Col size="md-8">
                          <p className="mt-4"><strong>Title:</strong> {book.volumeInfo.title}</p>
                          <p><strong>Author(s):</strong> {book.volumeInfo.authors[0]}</p>

                          <p className="mt-3"><strong>Description:</strong> {book.volumeInfo.description}</p>
                        </Col>
                      </Row>
                      <Link to={"/books/" + book.id}>
                        <button
                          className="btn btn-success float-right mb-5"
                          value={book.id}
                          name="searchGoogs"
                          onClick={this.handleSaveFormSubmit}
                        >
                          Save Book
                        </button>
                      </Link>
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
