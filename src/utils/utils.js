export const getSections = container => {
    let sections = [];
    for(let element of container) {
        sections.push({
            id: element.id,
            top: element.getBoundingClientRect().top,
            bottom: element.getBoundingClientRect().bottom
        });
    }
    return sections;
}
