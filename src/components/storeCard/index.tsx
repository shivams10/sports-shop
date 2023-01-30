import { Button, Card } from "react-bootstrap";

import { FormatCurrency } from "../../utilities/formatCurrency";
import { useCart } from "../../context/cartContext";

type StoreCardProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreCard({ id, name, price, imgUrl }: StoreCardProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100"> 
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ width: "80%", height: "250px", margin: "auto" }}
        className="mt-4"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4 mx-2">
          <span style={{ color: "rgb(7, 146, 146)" }} className="fs-4">
            {name}
          </span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="m-auto">
          {quantity === 0 ? (
            <Button
              className="w-100 px-5 m-auto"
              onClick={() => increaseCartQuantity(id)}
            >
              Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "1rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "1rem" }}
              >
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                style={{ padding: "5px 52px" }}
                onClick={() => removeFromCart(id)}
                className="remove-button"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
