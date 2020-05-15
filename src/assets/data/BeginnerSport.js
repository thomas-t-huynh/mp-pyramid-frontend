const om = {
    name: 'OM'
 }

 const rest = {
     name: ''
 }

 const arc = {
     name: 'arc'
 }

 const oae = {
     name: 'OAE'
 }

const hb = {
    name: 'hb'
}

const se = {
    name: 'se'
}

const wbl = {
    name: 'wbl'
}

const lb = {
    name: 'lb'
}

const campus = {
    name: 'campus'
}

const lbc = {
    name: 'lbc'
}

const rp = {
    name: 'rp'
}

const int = {
    name: 'intervals'
}

const os = {
    name: 'rp/os'
}

function createTrainingObject () {
    let obj = {
        name: "",
        day: "",
        time: "",
        exercises: {},
        exercisesOrder: []
    }
    for (const arg of arguments) {
        const split = arg.split(":")
        if (split.length === 2) {
            obj.exercises = { ...obj.exercises, [split[0]]: { note: split[1] } }
        } else {
            obj.exercises = { ...obj.exercises, [split[0]]: {} }
        }
        obj.exercisesOrder.push(split[0])
    }
    return obj
}

console.log(createTrainingObject("key:value", "value"))

const preset = [
    []
]