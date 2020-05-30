let emptyTempalte = []

let emptyDay = {
    name: "",
    day: "",
    time: "",
    exercises: {},
    exercisesOrder: []
}

for (var i = 0; i < (17*7); i++) {
    emptyTempalte.push(emptyDay)
}

export default emptyTempalte;