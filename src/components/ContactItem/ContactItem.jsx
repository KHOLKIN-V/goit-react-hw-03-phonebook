import PropTypes from "prop-types";
import cs from "./ContactItem.module.css";

const ContactItem = ({ name, number, onDelete, id }) => {
  return (
    <>
      {name}: {number}
      <button
        className={cs.btnDeleteContact}
        type="button"
        name="delete"
        onClick={() => onDelete(id)}
      >
        DELETE
      </button>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
