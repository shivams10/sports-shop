import { Col, Row } from "react-bootstrap";

import { StoreCard } from "../../components/storeCard";
import storeItems from "../../data/items.json";

export const Store = () => {
  return (
    <>
      <h2 className="d-flex mb-3 justify-content-center" style={{color: "rgb(4, 99, 99)"}}>Store</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreCard {...item}/>
          </Col>
        ))}
      </Row>
    </>
  );
};
