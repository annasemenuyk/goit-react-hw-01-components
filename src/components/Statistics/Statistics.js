import React from 'react';
import PropTypes from 'prop-types';
import s from'./Statistics.module.css';
import randomColor from "randomcolor";


function Statistics({title, stats}){
    return(
<section className={s.statistics}>
{title && <h2 className={s.title}>{title}</h2>}

  <ul className={s.list}>
  {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s.item}
            style={{ backgroundColor: onRandomColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
  </ul>
</section>        

    );
}
function onRandomColor() {
    return "#" + Math.floor(Math.random() * 16777216).toString(16);
  }
Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  };
  
export default Statistics;