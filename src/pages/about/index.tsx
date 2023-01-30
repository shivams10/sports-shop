import { Container } from "react-bootstrap";

export const About = () => {
  return (
    <Container>
      <h1 className="about-heading"> Sports Shop</h1>
      <p className="fs-5"> -A web app that helps user to buy sport product</p>
      <h2 className="about-heading">Description</h2>
      <p className="fs-5">- The site has 2 pages:-</p>
      <p>
        1. The store page where all the sport items and its information is
        listed and user can add and remove sport item.
      </p>
      <p> 2. About page.</p>
      <h2 className="about-heading">Technology used</h2>
      <div className="d-flex gap-2 align-items-center">
        <p className="fs-5">1. React Js:</p>
        <p>A javascript library created with Vite.</p>
      </div>
      <div className="d-flex gap-2 align-items-center">
        <p className="fs-5">2. Bootstrap:</p>
        <p>For CSS.</p>
      </div>
      <div className="d-flex gap-2 align-items-center">
        <p className="fs-5">3. Typescript:</p>
        <p>For defining types and imroving development experiences.</p>
      </div>
      <div className="d-flex gap-2 align-items-center">
        <p className="fs-5">4. Other Tools:</p>
        <p>GIt / Github. </p>
      </div>
      <p className="fs-4 about-heading">Start project using: npm run dev.</p>
    </Container>
  );
};
