import { input } from '@inquirer/prompts'

const cli = async () => {
    console.log('Welcome to Discount Calculator CLI\n')

    const inputPrice = await input({
        message: 'Enter the price, numbers only',
        validate: value => /^\d+$/.test(value) ? true : 'Price must be made ONLY of numbers!!!'
    })
    const inputDiscountPercent = await input({
        message: 'Enter the discount percent',
        validate: value => value > 0 && value < 100 ? true : 'Discount percent must be equal or more than 0% AND equal or less than 100%!!!'
    })

    const finalResult = inputPrice * (100 - inputDiscountPercent) / 100
    console.log(finalResult.toFixed(2))
    return finalResult.toFixed(2)
}

export default cli
