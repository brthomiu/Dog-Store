import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../cartContext";
import { useContext } from "react";

const ProductCard = (props) => {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <Card>
      <Card.Body class="bg-light p-4 border">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6" align="center">
                <Button
                  sm="6"
                  className="m-2"
                  onClick={() => cart.addOneToCart(product.id)}
                >
                  +
                </Button>
                <Button
                  sm="6"
                  className="m-2"
                  onClick={() => cart.removeOneFromCart(product.id)}
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              onClick={() => cart.deleteFromCart(product.id)}
              className="mt-3"
            >
              Remove from cart
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
