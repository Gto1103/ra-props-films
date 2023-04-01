import Star from './Star/Star';

const Stars = ({ count }) => {

	if (typeof count !== 'number' || count > 5 || count < 0) {
		return null;
	}

	return (
		<ul className="card-body-stars u-clearfix">
         {[...Array(count)].map((_, idx) => <li key={idx}><Star /></li>)}
      </ul>
	)
}

export default Stars;