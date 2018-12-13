function person(personName, personAge) {
    return console.log(`The person's name is ${personName} and is ${personAge} years old.`);
}

let personOne = new person("Zak Nikolov", 24);

async function asFunc() {
    await person(personOne);

    setTimeout(country => {
        country = 'Bulgaria';
        console.log(country);
    }, 7000);
}

let contactList = $('#contact-list');
console.log(contactList);

asFunc();