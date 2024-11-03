import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function Product({productData}){
return(
    


  
    <Card>
      <Card.Img variant="top" src= {productData.img}/>
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>
      ${productData.Price}
      </Card.Text>
      
      <div className="d-flex justify-content-between">
          <Button variant="primary">Add to Cart</Button>
          <Button variant="primary">Buy Now</Button>
        </div>
      </Card.Body>
    </Card>


 


  
)
}
Product.propTypes = {
    productData: PropTypes.shape({
        img: PropTypes.string.isRequired,  // Validating img as required string
        title: PropTypes.string.isRequired,  // Validating title as required string
        Price: PropTypes.string.isRequired  // Validating price as required string
}) .isRequired
};
export default  Product