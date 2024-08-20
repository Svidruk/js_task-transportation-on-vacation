/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carRent = 40;
  const shortTerm = 3;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  let total = days * carRent;

  if (days >= longTerm) {
    return (total -= longTermDiscount);
  }

  if (days >= shortTerm) {
    return (total -= shortTermDiscount);
  }

  return total;
}

module.exports = calculateRentalCost;
