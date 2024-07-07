import PropTypes from 'prop-types';
import './Host.scss';

function Host(props) {
  return (
    <aside className="host-comp">
      <div className="host-name">{props.hostName}</div>
      <div className="host-picture">
        <img src={props.hostPic} alt={`Photo de ${props.hostName}`} />
      </div>
    </aside>
  );
}

Host.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostPic: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Host;
