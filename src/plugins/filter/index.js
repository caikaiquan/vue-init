let priceFilter = (num) => {
    if (num === '——') {
        return num;
    } else if (Number(num)) {
        return Number(num).toFixed(2);
    } else {
        return '0.00';
    }
};
export default {
    priceFilter,
}


