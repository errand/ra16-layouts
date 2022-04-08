import PropTypes from 'prop-types';

export default function ProjectList(props) {
  const {item} = props;
  return (
    <div className="project" data-id={item.id} data-category={item.category}>
      <img src={item.img} alt=""  />
    </div>
      )
}
ProjectList.propTypes = {
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}
