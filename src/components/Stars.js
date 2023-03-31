import Star from './Star/Star';
import shortId from 'shortid';


const Stars = ({ count }) => {

	if (typeof count !== 'number' || count > 5 || count < 0) {
		return null;
	}

	let starList =[];
	for (let i = 1; i <= count; i++) {
		starList.push(
			<li key = {shortId.generate()}><Star/></li>
		);
	}

	return (
		<ul className="card-body-stars u-clearfix">
         {starList}
      </ul>
	)
}

export default Stars;