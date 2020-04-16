import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './breadCrumb.css';

const BreadCrumb = ({
    breadCrumb,
    showChildren,
}) => {
    const [fileName, setFileName] = useState('');

    const getChildren = (children, index) => {
        setFileName('');
        showChildren(children, index);
    }
    const showFileName = (name) => {
        setFileName(`THIS IS FILE ${name}`);
    }
  return (
    <section className="bcContainer">
        {
            breadCrumb.map((listItem, index) => (
                <div className="breadCrumb" key={index}>
                    <div
                        className="bcBox bcItem"
                        onClick={() => getChildren(listItem.children, index)}
                    >
                        {listItem.name} >
                    </div>
                    <div className="bcChildren">
                        {
                            listItem.showFiles && (
                                listItem.children
                                .filter(child => child.type !== 'dir')
                                    .map((filterChild, index) => (
                                    <div
                                        key={index}
                                        className="bcBox"
                                        onClick={() => showFileName(filterChild.name)}
                                    >
                                        {filterChild.name}
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            ))
        }
        <div className="bcFileText">
            {fileName}
        </div>
    </section>
  );
}

BreadCrumb.propTypes = {
    breadCrumb: PropTypes.arrayOf(PropTypes.shape()),
    showChildren: PropTypes.func,
  };

export default BreadCrumb;
