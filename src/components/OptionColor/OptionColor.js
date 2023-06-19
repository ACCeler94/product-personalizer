import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
import PropTypes, { arrayOf } from 'prop-types';


const OptionColor = props => {

  const {
    currentColor,
    setCurrentColor,
    prepareColorName,
    colors
  } = props;

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      {
        // button pseudo element caused value to be 0 when clicked thus a need for validation
      }
      <ul className={styles.choices} onClick={e => e.target.value ? setCurrentColor(e.target.value) : null} >
        {colors.map(color => {
          return (
            <li key={color}><button type="button" className={clsx(prepareColorName(color), currentColor === color && styles.active)} value={color} /></li>
          )
        })}
      </ul>
    </div>
  )
}



OptionColor.propTypes = {
  colors: arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  prepareColorName: PropTypes.func.isRequired,
};




export default OptionColor;