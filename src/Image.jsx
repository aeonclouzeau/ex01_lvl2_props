import PropTypes from "prop-types";
import "./Image.css";

const Image = (props) => {
	console.log(props);
	return (
		<div className="img-container">
			<img
				src={props.src}
				alt={props.alt}
				width={props.width}
				height={props.height}
			/>
		</div>
	);
};

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default Image;
