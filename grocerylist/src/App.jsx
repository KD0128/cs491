import { useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

const App = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim() !== "") {
      setList([...list, item]);
      setItem("");
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Grocery List</h1>

      <Form className="d-flex gap-2">
        <Form.Control
          type="text"
          placeholder="Enter item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />

        <Button onClick={addItem}>+</Button>
      </Form>

      <ListGroup className="mt-4">
        {list.map((i, index) => (
          <ListGroup.Item key={index}>{i}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default App;