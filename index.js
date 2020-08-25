// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
return Object.assign({},driver, {[key]: value})
return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    return Object.assign(driver, {[key]: value})
    return newDriver
}

function deleteFromDriverByKey(driver, key, value){
    return Object.assign({},driver, {[key]: value})
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key, value){
    return Object.assign(driver, {[key]: value})
    delete newDriver[key]
    return newDriver
}