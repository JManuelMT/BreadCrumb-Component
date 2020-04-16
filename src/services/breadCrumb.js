import transformList from '../utils/transformList';

export const getContents = (list) => (
    new Promise((resolve) => {
        resolve(transformList(list));
    })
);