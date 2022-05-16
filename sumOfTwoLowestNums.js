function sumTwoSmallestNumbers(numbers) {
    numbers.sort( (a, b) => (a - b))
    let result = numbers[0] + numbers[1]
    return result
}