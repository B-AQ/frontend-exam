import React, { Component } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card'


export class Flowers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowers: [],
    };
  }

  componentDidMount() {
    const url = "http://localhost:3001/flowers";
    axios
      .get(url)
      .then((result) => {
        this.setState({
          flowers: result.data,
        });
      })
      .catch((err) => console.error(err));
  }

  addFavFlowers = (index) => {
    const addflower = {
      name: this.state.flowers[index].name,
      photo: this.state.flowers[index].photo,
      instructions: this.state.flowers[index].instructions,
    }.catch((err) => console.error(err));

    const url = "http://localhost:3001/createFav";
    axios
      .post(url, addflower)
      .then((res) => {})
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <>
      {this.state.addflower.length > 0 &&
       this.state.addflower.map((flower , idx) =>{
        return(
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={flower.photo} />
        <Card.Body>
          <Card.Title>{flower.name}</Card.Title>
          <Card.Text>
          {flower.instructions}
          </Card.Text>
        </Card.Body>
      </Card>
        )}
        )
    }
    </>
    )
  } 





}

export default Flowers;