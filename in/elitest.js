// Assuming mp is defined somewhere in your code
const mp = {
    ODD_Z: 'odd parity',
    EVEN_Z: 'even parity',
    // other properties and methods
};

// Assign eig_parity to a value from mp
let eig_parity = mp.ODD_Z;

console.log(eig_parity);  // Output: 'odd parity'

// Example function that uses eig_parity
function checkEigenParity(parity) {
    if (parity === mp.ODD_Z) {
        console.log('The eigenvalue has odd parity.');
    } else if (parity === mp.EVEN_Z) {
        console.log('The eigenvalue has even parity.');
    } else {
        console.log('Unknown parity.');
    }
}

// Use the function to check parity
checkEigenParity(eig_parity);  // Output: 'The eigenvalue has odd parity.'
