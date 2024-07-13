import React from 'react'
import styles from './Work.module.css'

const Work = () => {
  const handleButtonClick1 = () => {
    window.location.href = 'https://github.com/Harjot-Kaur29/Pinterest_Clone';
  };

  const handleButtonClick2 = () => {
    window.location.href = 'https://github.com/Harjot-Kaur29/Resume-Maker';
  };

  const handleButtonClick3 = () => {
    window.location.href = 'https://github.com/Harjot-Kaur29/BookStack';
  };
  return (
<>
<div id = "work">
<h1 className={styles.work_heading}>My Work</h1>
<div className={styles.work_container}>
<div className={styles.card}>
  <img className={styles.work1} src="image5.jpg" alt="work1" />
  <div className={styles.container}>
    <h4><b>Pinterest Clone</b></h4>
   <button onClick={handleButtonClick1}>View Source Code</button>
  </div>
</div>
<div className={styles.card}>
  <img className={styles.work1} src="image7.png" alt="work1" />
  <div className={styles.container}>
    <h4><b>Resume Builder</b></h4>
   <button onClick = {handleButtonClick2}>View Source Code</button>
  </div>
</div>
<div className={styles.card}>
  <img className={styles.work1} src="image6.jpg" alt="work1" />
  <div className={styles.container}>
    <h4><b>Full Stack Book Website</b></h4>
   <button onClick = {handleButtonClick3}>View Source Code</button>
  </div>
</div>
</div>
</div>
</>
  )
}

export default Work
