import PropTypes from 'prop-types';
import css from './Data.module.css';

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const Data = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(item => (
          <li
            key={item.id}
            className={css.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Data.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
