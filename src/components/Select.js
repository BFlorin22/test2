import React from 'react';

const select = props => {
  const loading = props.loading ? 'is-loading' : '';
  return (
    <div className={`select ${loading}`}>
      <select value={props.value} onChange={props.onChange}>
        <option value="">None</option>
        {props.options.length
          ? props.options.map(item => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default select;
