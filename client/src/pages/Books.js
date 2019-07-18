import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    googlebooks: [],
    image: "",
    title: "",
    author: "",
    synopsis: "",
    link: "",
    clicked: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleSearchFormSubmit = event => {
    event.preventDefault();
    const title = event.target.value;
    if (this.state.title) {
      API.searchBooks(title)
        .then(res => {
          const searchRes = res.data.items;
          searchRes.forEach(book => {
            this.setState({ googlebooks: searchRes })
          })
        })
        .catch(err => console.log(err));
    }
  };

  handleSaveFormSubmit = event => {
    let selectedBook = [];
    this.state.googlebooks.map(book => {
      if (event.target.value === book.id) {
        selectedBook = book;
      }
      return selectedBook;
    })
    console.log(selectedBook);

    const bImage = selectedBook.volumeInfo.imageLinks.thumbnail;
    const bTitle = selectedBook.volumeInfo.title;
    const bAuthor = selectedBook.volumeInfo.authors[0];
    const bSynopsis = selectedBook.volumeInfo.description;
    const bLink = selectedBook.volumeInfo.canonicalVolumeLink;

    event.preventDefault();
    API.saveBook({
      image: bImage,
      title: bTitle,
      author: bAuthor,
      synopsis: bSynopsis,
      link: bLink,
      clicked: true
    })
      .then(res => { console.log("this happened") })
      .catch(err => console.log(err));
    // this.setState({ clicked: true });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron style={{ height: 150 }}>
              <h1>Search Google Books by Title</h1>
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />

                <FormBtn
                  disabled={!(this.state.title)}
                  value={this.state.title}
                  name="searchGoogs"
                  onClick={this.handleSearchFormSubmit}
                >
                  Search
              </FormBtn>
              </form>
            </Jumbotron>
          </Col>
          <Col size="md-12 sm-12">
            <Jumbotron style={{ height: 20 }}>
              <h1>Search Results</h1>
            </Jumbotron>
            {this.state.googlebooks.length ? (
              <List>
                {this.state.googlebooks.map(book => (
                  <ListItem key={book.id}>
                    <Container className="mt-2 mb-2">
                      <Row>
                        <Col size="md-3">
                          <img className="mr-2 mt-3" src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                        </Col>
                        <Col size="md-8">
                          <p className="mt-4"><strong>Title:</strong> {book.volumeInfo.title}</p>
                          <p><strong>Author(s):</strong> {book.volumeInfo.authors[0]}</p>

                          <p className="mt-3"><strong>Description:</strong> {book.volumeInfo.description.substr(0, 200)} ...</p>
                        </Col>
                      </Row>
                      <Link to={"/books/" + book.id}>
                        <button
                          className="btn btn-success float-right mb-4"
                          value={book.id}
                          name="searchGoogs"
                          // disabled={!(book.clicked)}
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
        <div className="mb-5"></div>
      </Container>
    );
  }
}

export default Books;
