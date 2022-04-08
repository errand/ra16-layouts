import PropTypes from 'prop-types';

export default function Toolbar(props) {
  const {filters, selected, onSelectFilter} = props;

  return (
    <div className="filters">
      {filters.map(
        filter => <button type="button" key={filter} onClick={onSelectFilter} className={filter === selected ? 'selected' : ''}>{filter}</button>
      )}
    </div>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};
