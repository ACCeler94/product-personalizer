import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
import PropTypes, { arrayOf } from 'prop-types';

const OptionSize = props => {

  const {
    sizes,
    currentSize,
    setCurrentSize,
  } = props;


  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices} onClick={e => setCurrentSize(e.target.textContent)} >
        {sizes.map(size => {
          return (
            <li key={size.name}><button type="button" className={clsx(currentSize === size.name && styles.active)}>{size.name}</button></li>
          )
        })
        }
      </ul>
    </div>
  )
}



OptionSize.propTypes = {
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  sizes: arrayOf(PropTypes.object).isRequired,
};


export default OptionSize;