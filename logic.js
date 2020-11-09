// Get all quotes
const quotes = [
    {
        quote: 
         'Lorem ipsum dolor sit amet consectetur adipiscing elit elementum',
        author: "Rudyard walkinshaw"
    },
    {
        quote: 
         'Lorem ipsum dolor sit amet consectetur adipiscing elit elementum',
        author: "Rudyard walkinshaw"
    },
    {
        quote: 
         'Lorem ipsum dolor sit amet consectetur adipiscing elit elementum',
        author: "Rudyard walkinshaw"
    },
    {
        quote: 
         'Lorem ipsum dolor sit amet consectetur adipiscing elit elementum',
        author: "Rudyard walkinshaw"
    },
    {
        quote: 
         'Lorem ipsum dolor sit amet consectetur adipiscing elit elementum',
        author: "Rudyard walkinshaw"
    },
    {
        quote: 
         'Lorem ipsum dolor sit amet consectetur adipiscing elit elementum',
        author: "Rudyard walkinshaw"
    },
    {
        quote: 
         'Lorem ipsum dolor sit amet consectetur adipiscing elit elementum',
        author: "Rudyard walkinshaw"
    },
    {
        quote: 
         'Lorem ipsum dolor sit amet consectetur adipiscing elit elementum',
        author: "Rudyard walkinshaw"
    },
];

//Button Generate Quotes
const btn = document.querySelector('.generate');

//Add Event Listener
btn.addEventListener('click',()=>{

    // Get Random text of Quotes
    let random = Math.floor(Math.random() * quotes.length );
    console.log(random);

    //Show text on Screen
    document.querySelector('.quote').innerText = quotes[random].quote;
    document.querySelector('.author').innerText = quotes[random].author;

})

console.log(quotes);