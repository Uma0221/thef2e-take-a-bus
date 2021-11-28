import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import path from '../../router/path';
import styles from './styles.module.scss';

import { setNearbyStops } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

function NearbyBox() {
  const [frontNearbyStops, SetFrontNearbyStops] = useState([]);
  const {
    state: { position, nearbyStops },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    if (position) {
      setNearbyStops(dispatch, { lng: position.lng, lat: position.lat });
    }
  }, [position]);

  useEffect(() => {
    if (nearbyStops) {
      if (nearbyStops.length > 5) {
        const array = [];
        for (var i = 0; i < 5; i++) {
          array.push(nearbyStops[i]);
        }
        SetFrontNearbyStops(array);
      } else {
        SetFrontNearbyStops(nearbyStops);
      }
    }
  }, [nearbyStops]);

  return (
    <div className={styles.sidebar_box}>
      <div
        className={`${styles.box_linkRow} ${styles.box__alignItemsCenter} ${styles.box__spaceBetween} ${styles.nearbyBox__marginBottom}`}
      >
        <div className={styles.linkRow__fontSize}>附近站牌</div>
        <Link to={path.nearby}>
          <div className={styles.linkRow_arrowIcon}></div>
        </Link>
      </div>
      {nearbyStops ? (
        <>
          {frontNearbyStops.map((nearbyStop, index) => (
            <div className={styles.nearbyBox__marginBottom} key={index}>
              <div
                className={`${styles.routeStopBox_stopInfoBox} ${styles.box__alignItemsCenter} ${styles.box__spaceBetween}`}
              >
                <div className={styles.stopInfoBox_stopName__fontSize}>
                  {nearbyStop.stationName}
                </div>
                <div className={styles.stopInfoBox_stopDistance__fontSize}>
                  {nearbyStop.stationDistance} 公尺
                </div>
              </div>
              <div
                className={`${styles.box_linkRow} ${styles.box__alignItemsCenter} ${styles.box__spaceBetween}`}
              >
                <div className={styles.routeStopBox_routeNameBox}>
                  {nearbyStop.routes.map((routeName, index) => (
                    <div key={index}>
                      <div
                        className={`${styles.routeNameBox_routeName} ${styles.linkRow__fontSize}`}
                      >
                        {routeName}
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.linkRow_arrowIcon}></div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default NearbyBox;
