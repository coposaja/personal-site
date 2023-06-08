import React from 'react';

import styles from './Intro.module.scss';

const Intro = () => {
	return (
		<div className={`${styles.wrapper} light-bg`}>
			<div className={`${styles.content}`}>
				<h1>
					I'm <span>Yohanzen C. Alexander</span> a Software Engineer
				</h1>
			</div>
		</div>
	)
}

export default Intro;
