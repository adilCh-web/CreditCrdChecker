

function validateCreditCard(cardNr)
{

    let arrayNr = cardNr.toString().split("").reverse() // converting the number to an array and reversed the array
    // console.log(arrayNr)
    let total = 0;
    for (let n = 0;n< arrayNr.length;n++)
    {
        if (n % 2 !== 0)
        {
            let multipliedByTwo = Number(arrayNr[n])*2;  // reconverting to nr
            if(multipliedByTwo.toString().length !=1) // if the number greater than 9 ( two digits )
            {
                multipliedByTwo-=9;
                total+=multipliedByTwo
            }
            else { total += multipliedByTwo}
        }
        else 
        {
            total += Number(arrayNr[n])
        }
    }


    if (total %10 === 0) 
    {   
        // console.log(total);
        switch(total.toString()[0])
        {
            case "3":
            return "valid card: American Express"
            break
            case "4":
            return "valid card: Visa"
            break
            case "5":
            return "valid card: Master Card"
            break
            case "6":
            return "valid card: Discover"
            break
            default:
            return "valid card : Company not found"
            break
        }
    }
    if (total %10 !== 0) {return "Invalid card"};



}




// All valid credit card numbers
const valid1 = 4539677908016808;
const valid2 = 5535766768751439;
const valid3 = 371612019985236;
const valid4 = 6011144340682905;
const valid5 = 4539404967869666;

// All invalid credit card numbers
const invalid1 = 4532778771091795 ;
const invalid2 = 5795593392134643 ;
const invalid3 = 375796084459914;
const invalid4 = 6011127961777935;
const invalid5 = 5382019772883854 ;

// Can be either valid or invalid
const mystery1 = 344801968305414;
const mystery2 = 5466100861620239;
const mystery3 = 6011377020962656203;
const mystery4 = 4929877169217093;
const mystery5 = 4913540463072523 ;

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];





for (nr of batch)
{
  console.log(`${nr}: ${validateCreditCard(nr)}\n`)
}; 


