const countWords = words => {
    if (typeof words !== 'string') return 0;

    return words ? words.trim().split(/\s+/).length : 0;
}

export { countWords };
export default countWords;