function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let newCustomers = [...customers];
  for (let i = 0; i < newCustomers.length; i += 1) {
    for (let j = 0; j < customers.length - i - 1; j += 1) {
      if (newCustomers[j] > newCustomers[j + 1]) {
        const replace = newCustomers[j];
        (newCustomers[j] = newCustomers[j + 1]),
          (newCustomers[j + 1] = replace);
      }
    }
  }
  return newCustomers;
}

// ตอบคำถามตรงนี้จ้า
let customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));
