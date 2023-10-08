import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  //destructuring
  const { items } = props;

  //memoize the sorting
  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return items.sort((a, b) => a - b);
  }, [items]); //ak dostanem novem items, chceme ich re-sortnut
  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
