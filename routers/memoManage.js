let allMem = [];

function getAllMem() {
    return allMem;
}

function addToMem(item) {
    allMem.push(item);
}

function deleteToMem(item) {
    allMem.pop(item);
}

module.exports = {
    getAllMem,
    addToMem
};
