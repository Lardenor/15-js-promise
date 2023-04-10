const form = document.getElementById('documents-form');
const resultParagraph = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const passportInput = document.getElementById('passport-input');
    const passportScansInput = document.getElementById('passport-scans-input');
    const ukrainianPassportInput = document.getElementById('ukrainian-passport-input');
    const marriageCertificateInput = document.getElementById('marriage-certificate-input');
    const childrenBirthInput = document.getElementById('children-birth-certificates-input');
    const bankInput = document.getElementById('bank-statement-input');

    const passportPromise = new Promise((resolve, reject) => {
        if (passportInput.checked) {
            resolve('Дійсний закордонний паспорт');
        } else {
            reject('Немає дійсного закордонного паспорту');
        }
    });

    const passportScansPromise = new Promise((resolve, reject) => {
        if (passportScansInput.checked) {
            resolve('Cкан-копії всіх сторінок закордонного паспорта');
        } else {
            reject('Немає скан-копій всіх сторінок закордонного паспорта');
        }
    });

    const ukrainianPassportPromise = new Promise((resolve, reject) => {
        if (ukrainianPassportInput.checked) {
            resolve('Український паспорт з усіма заповненими сторінками');
        } else {
            reject('Немає українського паспорту з усіма заповненими сторінками');
        }
    });

    const marriageCertificatePromise = new Promise((resolve, reject) => {
        if (marriageCertificateInput.checked) {
            resolve('Свідоцтво про шлюб чи розлучення');
        } else {
            reject('Немає свідоцтва про шлюб чи розлучення');
        }
    });

    const childrenBirthCertificatesPromise = new Promise((resolve, reject) => {
        if (childrenBirthInput.checked) {
            resolve('Свідоцтва про народження дітей');
        } else {
            reject('Немає свідоцтв про народження дітей');
        }
    }); 

    const bankStatementPromise = new Promise((resolve, reject) => {
        if (bankInput.checked) {
            resolve('Виписка з банку за останні 6 місяців');
        } else {
            reject('Немає виписки з банку за останні 6 місяців');
        }
    });
//* Видозмінений код через chat
    const promises = [passportPromise, passportScansPromise, ukrainianPassportPromise, marriageCertificatePromise, childrenBirthCertificatesPromise, bankStatementPromise];
    const resolvedPromises = [];
    const rejectedPromises = [];

    Promise.allSettled(promises)
.then(results => {
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            resolvedPromises.push(result.value);
        } else {
            rejectedPromises.push(result.reason);
        }
    });
    if (rejectedPromises.length === 0) {
        resultParagraph.innerHTML = `<p>У вас є всі необхідні документи:</p>`;
        const ul = document.createElement('ul');
         ul.classList.add('yes');
        resolvedPromises.forEach(promise => {
            const li = document.createElement('li');
            li.textContent = promise;
            ul.appendChild(li);
        });
        resultParagraph.appendChild(ul);
    } else {
        resultParagraph.innerHTML = `<p>У вас відсутні наступні документи:</p>`;
        const ul = document.createElement('ul');
        ul.classList.add('not');
        rejectedPromises.forEach(promise => {
            const li = document.createElement('li');
            li.textContent = promise;
            ul.appendChild(li);
        });
        resultParagraph.appendChild(ul);
    }
});
});

// !!!!!!!!!!!1Перший код
// const form = document.getElementById('documents-form');
// const resultParagraph = document.getElementById('result');

// form.addEventListener('submit', (event) => {
// event.preventDefault();

// const passportInput = document.getElementById('passport-input');
// const passportScansInput = document.getElementById('passport-scans-input');
// const ukrainianPassportInput = document.getElementById('ukrainian-passport-input');
// const marriageCertificateInput = document.getElementById('marriage-certificate-input');
// const childrenBirthInput = document.getElementById('children-birth-certificates-input');
// const bankInput = document.getElementById('bank-statement-input');

// const passportPromise = new Promise((resolve, reject) => {
// if (passportInput.checked) {
// resolve('Дійсний закордонний паспорт');
// } else {
// reject('Немає дійсного закордонного паспорту');
// }
// });

// const passportScansPromise = new Promise((resolve, reject) => {
// if (passportScansInput.checked) {
// resolve('Cкан-копії всіх сторінок закордонного паспорта');
// } else {
// reject('Немає скан-копій всіх сторінок закордонного паспорта');
// }
// });

// const ukrainianPassportPromise = new Promise((resolve, reject) => {
// if (ukrainianPassportInput.checked) {
// resolve('Український паспорт з усіма заповненими сторінками');
// } else {
// reject('Немає українського паспорту з усіма заповненими сторінками');
// }
// });

// const marriageCertificatePromise = new Promise((resolve, reject) => {
// if (marriageCertificateInput.checked) {
// resolve('Свідоцтво про шлюб чи розлучення');
// } else {
// reject('Немає свідоцтва про шлюб чи розлучення');
// }
// });

// const childrenBirthCertificatesPromise = new Promise((resolve, reject) => {
// if (childrenBirthInput.checked) {
// resolve('Свідоцтва про народження дітей');
// } else {
// reject('Немає свідоцтв про народження дітей');
// }
// });

// const bankStatementPromise = new Promise((resolve, reject) => {
// if (bankInput.checked) {
// resolve('Виписка з банку за останні 6 місяців');
// } else {
// reject('Немає виписки з банку за останні 6 місяців');
// }
// });
// Promise.all([passportPromise, passportScansPromise, ukrainianPassportPromise, marriageCertificatePromise, childrenBirthCertificatesPromise, bankStatementPromise])
// .then((values) => {
// resultParagraph.innerText = `Ви надали наступні документи:\n\n- ${values.join('\n- ')}`;
// })
// .catch((error) => {
// resultParagraph.innerText = `Не вдалося зібрати деякі необхідні документи: ${error}`;
// });})