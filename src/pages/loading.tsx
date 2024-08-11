import React from 'react';
import styles from '../../src/styles/ListView.module.scss' 

const Loading: React.FC = () => {
  return ( 
      <div>
        <div className={styles.loaderblock}></div>
      </div>
   )
}
export default Loading
