import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes, { arrayOf } from 'prop-types';
import { useState } from 'react';



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
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices} onClick={e => setCurrentSize(e.target.textContent)} >
              {props.sizes.map(size => {
                return (
                  <li key={size.name}><button type="button" className={clsx(currentSize === size.name && styles.active)}>{size.name}</button></li>
                )
              })
              }
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            {
              // button pseudo element caused value to be 0 when clicked thus a need for validation
            }
            <ul className={styles.choices} onClick={e => e.target.value ? setCurrentColor(e.target.value) : null} >
              {props.colors.map(color => {
                return (
                  <li key={color}><button type="button" className={clsx(prepareColorName(color), currentColor === color && styles.active)} value={color} /></li>
                )
              })}
            </ul>
          </div>
          <Button className={styles.button} handleClick={(e) => logCart(e)}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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