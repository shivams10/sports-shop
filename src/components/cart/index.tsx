import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../../context/cartContext";
import { CartItem } from "../cartItem";

import { FormatCurrency } from "../../utilities/formatCurrency";
import storeItem from "../../data/items.json";

type CartProps = {
  isOpen: boolean;
};

export function Cart({ isOpen }: CartProps) {
  const { closeCart, cartItems } = useCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItem.find(
                  (product) => product.id === cartItem.id
                );
                return total = (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
