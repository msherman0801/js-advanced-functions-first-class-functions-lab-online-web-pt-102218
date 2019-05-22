// Code your solution in this file!
const returnFirstTwoDrivers = function firstTwoDrivers(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function lastTwoDrivers(drivers) {
    return drivers.slice(drivers.length-2,drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
    return function(fare) {
        return fare*number
    }
}
function fareDoubler(number) {
    return number+number
}

function fareTripler(number) {
    return number*3
}

function fetchSpecifiedDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers)
}