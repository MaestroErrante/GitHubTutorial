// Get all quotes
const quotes = [
    {
        quote: 
         "It's just pathetic to give up on something before you even give it a shot.",
        author: "Reiko Mikami - Another"
    },
    {
        quote: 
         'You can die anytime but living takes true courage.',
        author: "Kenshin Himura - Rurouni Kenshin"
    },
    {
        quote: 
         'Every journey begins with a single step, we just have to have patience.',
        author: "Milly Thompson - Trigun"
    },
    {
        quote: 
         'The ticket to the future is always open.',
        author: "Vash The Stampede - Trigun"
    },
    {
        quote: 
         "It's more important to master the cards you're holding than to complain about the ones your opponent was dealt.",
        author: "Grimsley - Pokemon"
    },
    {
        quote: 
         "If you're gonna insist on gambling and then complain when you lose, you had better work on your game.",
        author: "Hatsu Kominato - Selector Infected Wixoss"
    },
    {
        quote: 
         'Power comes in response to a need, not a desire. You have to create that need.',
        author: "Goku - Drangon Ball Z"
    },
    {
        quote: 
         'I refuse to let my fear control me anymore.',
        author: "Maka Albarn - Soul Eater"
    },
    {
        quote: 
         'No matter how hard or impossible it is, never lose sight of your goal.',
        author: "Monkey D Luffy  - One piece"
    },
    {
        quote: 
         'The minute you think of giving up, think of the reason why you held on so long.',
        author: "Natsu Dragneel"
    },
    {
        quote: 
         'Human beings are strong because we can change ourselves.',
        author: "Saitama - One Punch Man"
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