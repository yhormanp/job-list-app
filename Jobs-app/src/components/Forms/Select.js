import PropTypes from "prop-types";

const Select = ({
  listItems,
  onChangeAction,
  defaultOption,
  fieldName,
  value,
}) => {
  return (
    <div className="dropdown-filter">
      <div className="lbl-control">
        <label>{fieldName}</label>
      </div>
      <select
        className="select-control"
        id="selectItem"
        onChange={(e) => onChangeAction(e)}
        value={value}
      >
        <option value={defaultOption}>{defaultOption}</option>
        {listItems.map((item, index) => (
          <option key={index} value={item.value}>
            {" "}
            {item.label}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  listItems: PropTypes.array.isRequired,
  defaultOption: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  onChangeAction: PropTypes.func.isRequired,
};

export default Select;
