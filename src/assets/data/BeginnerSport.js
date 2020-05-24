const om = 'OM'


 const rest = 'rest'

 const arc = 'arc'


 const oae = 'OAE'

const hb = 'hb'

const se = 'se'

const wbl = 'wbl'

const lb = 'lb'

const campus = 'campus'

const lbc = 'lbc'

const rp =  'rp'

const int = 'intervals'

const os = 'rp/os'

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

// macros
const c = createTrainingObject
// console.log(c('arc:2 x 20 min'))

const baseFitnesssPhase = [c('om:5 mod pitches'), c('om:4 mod pitches'), oae, c('arc:2 x 20 min'), oae, c('arc:2 x 25 min'), oae, c('om:7 mod pitches'), c('om:5 mod pitches'), oae, c('arc:2 x 30'), oae, c('arc:2 x 30 min'), oae, c('om:8 mod pitches'), c('om:6 mod pitches'), oae, c('arc:3 x 25 min'), c('arc:3 x 25 min'), c('arc:2 x 25 min'), oae, c('om: 10 mod pitches'), c('om: 8 mod pitches'), oae, c('arc:3 x 30 min'), c('arc:3 x 30 min'), c('arc:2 x 30 min'), oae ]

const strengthPhase = [c(hb, se), om, oae, c(hb, se), arc, oae, c(hb, se), om, oae, c(hb, se), arc, oae, c(hb, se), arc, oae, c(hb, se), arc, rest, c(hb, se), rest, rest]

const powerPhase = [c('wbl:60 min', 'campus:15 min'), rest, rest, c(lb, se), rest, c('wbl:60 min', 'campus:15 min'), rest, rest, c('lb:outdoors'), rest, c('wbl:60 min', 'campus:25 min',se), rest, rest, c('lb:90 min', se), rest]

const powerEndurancePhase = [c('wbl:60 min', lbc), rest, rest, c('wbl:50 min', lbc, se), rest, rest, c(rp), c(rp), rest, rest, c('wbl:50 min', lbc), rest, rest, c(rp, 'om:2 mod pitches'), c(rp, 'om:2 mod pitches'), rest, rest, c('wbl:40 min', int, se), rest, rest, c(rp, 'om:2 mod pitches') ]

const performancePhase = [c('rp:pumpy routes', 'om:2 mod pitches'), rest, rest, c('wbl:40 min', int, se), rest, rest, c('rp:pumpy routes', 'om:2 mod pitches'), c('rp:on sight', 'om:2 mod pitches'), rest, c('rp:pumpy routes', 'om:2mod pitches'), rest, c('rp:on sight', 'om:2 mod pitches'), rest, c('rp:on sight', 'om:2 mod pitches'), rest, rest, c('wbl:45 min'), rest, rest, c('rp:on sight', 'om:2 mod pitches'), c('rp:on sight', 'om:2 mod pitches')]

function restDays(days) {
    const restDays = []
    for (var i = 0; i < days; i++) {
        restDays.push(rest)
    }
    return restDays
}

const restPhase = restDays(14)

const concatPhases = [...baseFitnesssPhase, ...strengthPhase, ...powerPhase, ...powerEndurancePhase, ...performancePhase, ...restPhase]

const workouts = concatPhases.map(day => {
    if (typeof day === "string") {
        return createTrainingObject(day)
    }
    return day
})

console.log(workouts)
const beginnerSport = {
    phases: {
        baseFitness: 28,
        strength: 21,
        power: 15,
        powerEndurance: 21,
        performance: 22,
        rest: 14
    },
    workouts,
    weeks: 17
}

export default beginnerSport