export const getSections = container => {
    let sections = [];
    for(let element of container) {
        sections.push({
            id: element.id,
            top: element.id === 'details' ? 0 : element.offsetTop,
            bottom: element.offsetTop + element.offsetHeight
        });
    }
    return sections;
}


export const checkScrolling = (value, sections) => {
    let footerTop = document.getElementById("footer").offsetTop;
    if(value >= (footerTop - 700)) return null;
    if(sections) {
        for(let section of sections) {
            if(value < section.bottom - 50 && value > section.top - 50) 
                return section.id;
        }
    }
}