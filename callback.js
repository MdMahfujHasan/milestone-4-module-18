function explain_callback(name, age, task){
    console.log('name', name);
    console.log('your age', age);
    task();
}
explain_callback('mahfuj', 23, washHand)
explain_callback('munna', 24, takeShower);

function washHand(){
    console.log('wash your hand');
}

function takeShower(){
    console.log('take shower');
}