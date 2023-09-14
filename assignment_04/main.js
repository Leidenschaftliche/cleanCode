function factorial_print(number) {
    if (!Number.isInteger(number)){
        console.log("Can't calculate for non-integer values.")
        return -1
    }
    if (number<0){
        console.log("Can't calculate for negative values")
        return -2
    }
    if (number<=1){
        console.log(`factorial of ${number} is 1`)
        return 1
    }
    let fact_str = ""
    let fact = 1
    for (let i = 1; i < number; ++i) {
        fact_str += i + "*";
        fact *= i
    }
    fact_str += number;
    fact *= number
    console.log(`factorial of ${number} is ${fact_str} = ${fact}`)
    return fact;
}

factorial_print(3)


