import React from 'react';

const FilteredFruitList = ({filter, fruit}) => {
  const list = !filter || filter === 'all' ? fruit : fruit.filter(f => f.fruit_type === filter);

  return (
    <ul className="fruit-list">
      {list.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
};

export default FilteredFruitList;
