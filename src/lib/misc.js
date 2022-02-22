const randAlpha6 = () => {
    return Math.random().toString(36).slice(2).substr(0,6);
};

export {
    randAlpha6
}