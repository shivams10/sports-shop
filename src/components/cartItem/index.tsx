import { Button, Stack } from "react-bootstrap";

import { useCart } from "../../context/cartContext";
import { FormatCurrency } from "../../utilities/formatCurrency";
import storeItem from "../../data/items.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useCart();
  const item = storeItem.find((product) => product.id === id);
  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        alt="product image"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item?.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {FormatCurrency(item?.price)}
        </div>
      </div>
      <div> {FormatCurrency(item?.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item?.id)}
      >
        &times;
      </Button>  
    </Stack>
  );
}
