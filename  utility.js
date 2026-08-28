export function formatCurrency (pricing) {
   return (pricing / 100).toFixed(2);
}

// setTimeout(()=>{
//     alert(formatCurrency(499))
// }, 5000)
