function evenifyAll(numb){
    for (let i = 0; i < numb.length; i++) {
        const num = numb[i];
        if (num % 2 == 0){
            console.log(num, 'is even number.');
        }
        else{
            console.log(num, 'is odd number.');
        }
    }
}
var numb = [3, 9, 18, 26, 35, 57, 89];
evenifyAll(numb);
var friendsAge = [21, 23, 19, 24, 25, 27, 20];
evenifyAll(friendsAge);