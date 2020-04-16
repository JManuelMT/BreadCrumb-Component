const contentArr = [];
const transformList = (data) => {
    const tempObj = {
        name: '',
        type: '',
        children: [],
        showFiles: false,
    };

    for (let prop in data) {
        if (prop === 'children') {
            tempObj.children = [];
            Object.keys(data[prop]).forEach((property) => {
                if (contentArr.length > 0) {
                    contentArr[contentArr.length - 1].children.push({
                        name: property,
                        type: data[prop][property].type,
                    });
                }
                if (data[prop][property].type === 'dir') {
                    tempObj.name = property;
                    tempObj.type = data[prop][property].type;
                    contentArr.push(tempObj);
                    transformList(data[prop][property]);
                }
            })
        }
    }
    return contentArr;
}

export default transformList;