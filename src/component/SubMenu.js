import React from 'react';

function SubMenu({ name }) {
  return <span>{name}</span>;
}

SubMenu.propTypes = {
  name: React.PropTypes.required,
};

SubMenu.defaultProps = {
  name: '用户名未设置',
};

export default SubMenu;
