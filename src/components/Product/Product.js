import styles from './Product.module.scss';
import PropTypes, { arrayOf } from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';



const Product = props => {

  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);

  const prepareColorName = color => styles['color' + color[0].toUpperCase() + color.slice(1)];

  const getPrice = () => {
    const sizeObj = props.sizes.find(element => element.name === currentSize);

    return props.basePrice + sizeObj.additionalPrice
  }

  const logCart = (e) => {
    e.preventDefault();

    console.log(`
                Summary
                ===================
                Name: ${props.title}
                Price: ${getPrice()}
                Size: ${currentSize}
                Color: ${currentColor}
                `)
  }


  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} title={props.title} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductOptions
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          sizes={props.sizes}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          prepareColorName={prepareColorName}
          logCart={logCart}
        />
      </div >
    </article >
  )
};



Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: arrayOf(PropTypes.string).isRequired,
  sizes: arrayOf(PropTypes.object).isRequired
};


export default Product;