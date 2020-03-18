const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(total, e){
    return e + total}, 0)


//const totalBatteries = batteryBatches.reduce((total, e) => e + total) works in this case but only because it is addition
