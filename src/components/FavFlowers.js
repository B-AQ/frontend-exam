import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Card from 'react-bootstrap/Card'

class FavFlowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favFlowers: [],
      updateObj: {},
      showUpdate: false,
    };
  }

  componentDidMount() {
    const url = "http://localhost:3001/favFlower";
    axios
      .get(url)
      .then((response) => {
        this.setState({
          favFlowers: response.data,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <>
        <h1>My Favorite Flowers</h1>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default FavFlowers;
