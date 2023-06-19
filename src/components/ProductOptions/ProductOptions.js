import styles from '../Product/Product.module.scss';
import Button from '../Button/Button';
import PropTypes, { arrayOf } from 'prop-types';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';


const ProductOptions = props => {

  const {
    currentSize,
    setCurrentSize,
    sizes,
    colors,
    currentColor,
    setCurrentColor,
    prepareColorName,
    logCart
  } = props;

  return (
    <form>
      <OptionSize currentSize={currentSize} sizes={sizes} setCurrentSize={setCurrentSize} />
      <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} prepareColorName={prepareColorName} />
      <Button className={styles.button} handleClick={(e) => logCart(e)}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>

  )
}



ProductOptions.propTypes = {
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  colors: arrayOf(PropTypes.string).isRequired,
  sizes: arrayOf(PropTypes.object).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  prepareColorName: PropTypes.func.isRequired,
  logCart: PropTypes.func.isRequired
};



export default ProductOptions;