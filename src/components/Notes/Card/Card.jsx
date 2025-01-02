import PropTypes from "prop-types";

const Card = (title, text) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
