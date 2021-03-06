import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import path from '../../router/path';
import styles from './styles.module.scss';

import { setSelectStopIndex } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMap } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const { dispatch } = useContext(StoreContext);

  return (
    <div className={`${styles.nav} ${styles.box__spaceBetween}`}>
      <Link
        to={path.home}
        onClick={() => setSelectStopIndex(dispatch, { index: 0 })}
      >
        <div className={styles.nav_logo}></div>
      </Link>
      <div className={styles.nav_buttonBox}>
        <div className={styles.buttonBox_button}>
          <Link
            to={path.home}
            className={styles.buttonBox_front}
            onClick={() => setSelectStopIndex(dispatch, { index: 0 })}
          >
            <FontAwesomeIcon className={styles.button_icon} icon={faHome} />
          </Link>
          <div className={styles.buttonBox_shadow}></div>
        </div>
        <div className={styles.buttonBox_button}>
          <Link
            to={path.nearbyStops}
            className={styles.buttonBox_front}
            onClick={() => setSelectStopIndex(dispatch, { index: 0 })}
          >
            <FontAwesomeIcon className={styles.button_icon} icon={faMap} />
          </Link>
          <div className={styles.buttonBox_shadow}></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
