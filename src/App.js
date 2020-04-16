import React, { useEffect, useState } from 'react';
import { getContents } from './services/breadCrumb';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';
import BreadCrumbList from './constants/breadCrumbList.json';

const App = () => {
  const [breadCrumbList, setBreadCrumbList] = useState([]);
  const [breadCrumb, setBreadCrumb] = useState([]);

  const changeBreadCrumbList = list => {
    setBreadCrumb([...list]);
  };

  useEffect(() => {
    getContents(BreadCrumbList)
      .then((response) => {
        setBreadCrumbList([...response]);
        changeBreadCrumbList([response[0]]);
      })
  }, []);

  const showChildren = (children, currentIndex) => {
    const tempBreadCrumb = breadCrumb;
    if (breadCrumb.length > (currentIndex + 1)) {
      tempBreadCrumb.length = currentIndex + 1;
      changeBreadCrumbList(tempBreadCrumb);
    } else {
      const breadCrumbWithFiles = tempBreadCrumb.map(breadCrudItem => (
        {
          ...breadCrudItem,
          showFiles: true,
        })
      );
  
      children.forEach((child) => {
          const newList = breadCrumbList.filter(item => item.name === child.name);
          if (!breadCrumbWithFiles.some(list => list.name === child.name))  {
            breadCrumbWithFiles.push(...newList);
            changeBreadCrumbList(breadCrumbWithFiles);
          }
      });
    }
  };

  return (
    <div>
      <BreadCrumb breadCrumb={breadCrumb} showChildren={showChildren} />
    </div>
  );
}

export default App;
