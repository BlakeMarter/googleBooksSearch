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
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  };


  loadBooks = () => {
    API.searchBooks(this.state.title)
      .then(res =>
        this.setState({ googlebooks: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleSearchFormSubmit = event => {
    event.preventDefault();
    // console.log(event.target.value);
    const title = event.target.value;
    if (this.state.title) {
      API.searchBooks(title)
        .then(res => {
          const searchRes = res.data.items;

          searchRes.forEach(book => {
            // console.log(book.id);

            this.setState({ googlebooks: searchRes })
          })
          // console.log(this.state.googlebooks);
        })
        .catch(err => console.log(err));
    }
  };

  handleSaveFormSubmit = event => {
    // console.log(event.target.value);
    // console.log(this.state.googlebooks);
    let selectedBook = [];
    this.state.googlebooks.map(book => {
      if (event.target.value === book.id) {
        selectedBook = book;
      }
      return selectedBook;
    })

    const bImage = selectedBook.volumeInfo.imageLinks.thumbnail;
    const bTitle = selectedBook.volumeInfo.title;
    const bAuthor = selectedBook.volumeInfo.authors[0];
    const bSynopsis = selectedBook.volumeInfo.description;
    event.preventDefault();
    // console.log(this.state.title);
    // console.log(this.state.author);
    // console.log(this.state.synopsis);
    // console.log(this.state.image);
    API.saveBook({
      image: bImage,
      title: bTitle,
      author: bAuthor,
      synopsis: bSynopsis
    })
      .then(res => console.log("this happened"))
      .catch(err => console.log(err));

  };

  render() {
    console.log("***************************")
    console.log(this.state);
    // console.log(this.state.title);
    // console.log(this.state.author);
    // console.log(this.state.synopsis);
    // console.log(this.state.image);
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
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.googlebooks.length ? (
              <List>
                {this.state.googlebooks.map(book => (
                  <ListItem key={book.id}>
                    <Container className="mt-2 mb-2">
                      <Row>
                        <Col size="md-3">
                          <img className="mr-2" src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                        </Col>
                        <Col size="md-8">
                          <p className="mt-4"><strong>Title:</strong> {book.volumeInfo.title}</p>
                          <p><strong>Author(s):</strong> {book.volumeInfo.authors[0]}</p>

                          <p className="mt-3"><strong>Description:</strong> {book.volumeInfo.description.substr(0, 200)} ...</p>
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

export default Books;
