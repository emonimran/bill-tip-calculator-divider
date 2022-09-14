const billInput = document.querySelector('#billTotalInput');
const inputTip = document.querySelector('#tipInput');
const noOfPeople = document.querySelector('#numberOfPeople');


// Get number of people from number of people div


// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const billTotalInput = parseFloat(billInput.value);


  // get the tip from user & convert it into a percentage (divide by 100)
  const tip = parseFloat(inputTip.value);
  const tipInput = tip / 100;

  // get the total tip amount
  const totalTipAmount = tipInput * billTotalInput;
  // calculate the total (tip amount + bill)

  const totalBill = totalTipAmount + billTotalInput;
  
  // calculate the per person total (total divided by number of people)
  const numberOfPeople = parseFloat(noOfPeople.innerText);
  const perPersonTotal = (totalBill / numberOfPeople).toFixed(2);
  console.log(perPersonTotal);

  // update the perPersonTotal on DOM & show it to user
  document.querySelector('#perPersonTotal').innerText = `$ ${perPersonTotal}`;
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  const numberOfPeople = parseFloat(noOfPeople.innerText);
  const newNumberOfPeople = numberOfPeople + 1;
  console.log(newNumberOfPeople);

  // update the DOM with the new number of people
  document.querySelector('#numberOfPeople').innerText = newNumberOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  
  
  // decrement the amount of people
  const numberOfPeople = parseFloat(noOfPeople.innerText);
  let newNumberOfPeople;

  if (numberOfPeople > 1) {
    newNumberOfPeople = numberOfPeople - 1;    
  } else {
    newNumberOfPeople = 1;
  }

  console.log(newNumberOfPeople);

  // update the DOM with the new number of people
  document.querySelector('#numberOfPeople').innerText = newNumberOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();
}