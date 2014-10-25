function generate(num){
    var allPrimes = [];
    if (num == 1) allPrimes.push(1)
    else if (num == 2) allPrimes.push(1,2)
    else if (num >= 3) allPrimes.push(1,2,3)
    var x = 4;
    while (allPrimes.length < num)
    {
        if (x%2 != 0)
        {
            var limit = Math.sqrt(x)
            var flag = true;
            for (var i =3; i<=limit; i++){
                if (x%i==0)
                {
                    flag = false;
                    break;
                }
            }
            flag  ?  allPrimes.push(x) : '';
        }
        x++;
    }
    return allPrimes;
}
exports.generate = generate;
