import moment from "moment";

let emptyTemplate = []

for (var i = 0; i < (17*7); i++) {
    const day = {
        name: "",
        day: "",
        date: "",
        exercises: {},
        exercisesOrder: []
    }
    day.date =  moment().add(i, 'days').format('L')
    emptyTemplate.push(day)
}

export default emptyTemplate;