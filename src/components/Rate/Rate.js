import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import './Rate.scss';

const Rate = ({ score }) => {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate-comp">
			{stars.map((level) => (
				<FontAwesomeIcon
					key={level.toString()}
					className={score >= level ? "star fullish" : "star emptyish"}
					icon={fullStar}
					alt="rating star"
				/>
			))}
		</div>
	);
}

export default Rate;