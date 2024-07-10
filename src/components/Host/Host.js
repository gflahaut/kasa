import React from 'react';
import PropTypes from 'prop-types';
import './Host.scss';

function Host({id, hostName, hostPic}) {
  return (
    <aside className="host-comp" id={id}>
      <div className="host-name">{hostName}</div>
      <div className="host-picture">
        <img src={hostPic} alt={`${hostName}'s avatar`} />
      </div>
    </aside>
  );
}

// Your lover: Here, id is required
Host.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostPic: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  otherProp: PropTypes.any,
};

export default Host;
