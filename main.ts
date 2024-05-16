//question 2
//Personal Message: Store a person’s name in a variable, and print a message to that
//person. Your message should be simple, such as, “Hello Eric, would you like to learn some
//Python today?”

//let personname;
//console.log(`Hello ${personname} would you like to learn some python? `);

//question 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
//uppercase, and titlecas

//lower Case

//let personName : string = "ALEE"
//console.log("lowercase" , personName.toLowerCase())

//upper Case

//console.log("uppercase" , personName.toLocaleUpperCase())

//title Case
//console.log("titlecase" , personName.replace(/\bw/g,c => c.toUpperCase()))

//question 4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of
//its author. Your output should look something like the following, including the quotation marks:

//let quote: string = "A person who never made a mistake never tried  anything new"
//let author: string = "ALBERT EINSTEIN"
//console.log(`${author} once said ${quote}`);

//question 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable
//called famous_person. Then compose your message and store it in a new variable called message. 
//Print your message.

//let famousPerson: string = "ALBERT EINSTEIN"
//let quote: string = "A person who never made a mistake never tried  anything new"
//let message = `${famousPerson} once said ${quote}`
//console.log(message)

//question 6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make 
//sure you use each character combination, "\t" and "\n", at least once. Print the name 
//once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


//let personName =`\n\t ALEE MUSTAFA\t\n`
//console.log(personName)

//let stripped: string = personName.trim()
//console.log(stripped)

//question 7
//Number Eight: Write addition, subtraction, multiplication, and division operations that 
//each result in the number 8. Be sure to enclose your operations in print statements to see the results.

//Addition
//console.log("addition : 5 + 3 ="+ (5 + 3) )

//Subtraction
//console.log("Subtraction : 10 - 2 ="+ (10 - 2))

//Multiplication 
//console.log("Multiplication : 4 * 2 ="+ (4 * 2))

//Division
//console.log("Division : 16 / 2 ="+(16 / 2))

//question 9

//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that 
//reveals your favorite number. Print that message.

//let favouriteNumber: number = 7

//let message: string = `my favourite number is ${favouriteNumber}`

//console.log(message)

//question 10

//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything
// specific to write because your programs are too simple at this point, just add your name and the current date at the top of 
//each program file. Then write one sentence describing what the program does.

//This video is for comment tutorial

 //please dont change line 3 to 6. (abdullah)
 //let PersonName: string = "ALEE MUSTAFA";

 // step 1 show in lower case:
 
 //let lowercaseName: string = PersonName.toLowerCase();
 
 //console.log(lowercaseName);
 
 //step 2 show name in uppercase:
 
 //let uppercaseName: string = PersonName.toUpperCase();
 
 //console.log(uppercaseName);
 
 // step 3 show name in titlecase
 
 //let words: string[] = PersonName.split(" ");
 
 //let titlecaseName: string = ""
 
 //for (let i = 0 ; i < words.length; i++) {
 
   //  titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
 //};
 
 //console.log(titlecaseName)

//question 11

//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each 
//element in the list, one at a time.


//let names: string[]=['Shahid','Mubeen','Hanzala','Shees']
//console.log(names[0])
//console.log(names[1])
//console.log(names[2])
//console.log(names[3])


//question 12

//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.

//let names: string[]=['Shahid','Mubeen','Hanzala','Shees']

 // loop through each name in the array

 //for(let name of names) {
 // print a personalize message for each friend

//console.log(`Good morning ${name}, I hope you are having a fantastic day!`)

//}


//question 13 

//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores
//several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda 
//motorcycle.”


//let favoriteTransportation: Array<[transport: string, brand: string]> = []

//favoriteTransportation.push(["motorcycle","Honda"])
//favoriteTransportation.push(["car","Toyota"])
//favoriteTransportation.push(["bicycle","Morgan"])

//console.log(favoriteTransportation)
//using for each loop

//favoriteTransportation.forEach(([transport, brand]) =>
//{console.log(`I would like to own a ${brand} ${transport}.`)}
//)

//question 14

//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least
//three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

//let guestlist: Array<string> = [
  //"Zia Khan",
  //"Jahanzain Tayab",
  //"Abid Shirwani",
  //"Muhammad Ali Jinnah",
  //"Albert Einstein",
  //"Muhammad Ali"
//];

//loop for each to print invitation

//guestlist.forEach((guestName) =>
//{
//console.log(`Dear ${guestName}, you are invired to dinner please join us.`)

//})


//question 15

//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.


//let guestlist: Array<string> = [
  //"Zia Khan",
  //"Jahanzain Tayab",
  //"Abid Shirwani",
  //"Muhammad Ali Jinnah",
  //"Albert Einstein",
  //"Muhammad Ali"
//];

//loop for each to print invitation

//guestlist.forEach((guestName) =>
//{
//console.log(`Dear ${guestName}, you are invired to dinner please join us.`)

//})

//let not_coming: string = 'Zia Khan'
//let new_guest: string = 'Sami'
//guestlist[0] = new_guest
//guestlist.forEach((guestName) =>
//{
  //console.log(`Dear ${guestName}, you are invired to dinner please join us.`)
  
//})

//console.log(`Mr ${not_coming}, is not coming for dinner`)

//question 16


//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your l

//let guestlist: Array<string> = [
 // "Zia Khan",
  //"Jahanzain Tayab",
  //"Abid Shirwani",
  //"Muhammad Ali Jinnah",
  //"Albert Einstein",
  //"Muhammad Ali"
//];

//loop for each to print invitation

//guestlist.forEach((guestName) =>
//{
//console.log(`Dear ${guestName}, you are invired to dinner please join us.`)

//})

//let not_coming: string = 'Zia Khan'
//let new_guest: string = 'Sami'
//guestlist[0] = new_guest
//guestlist.forEach((guestName) =>
//{
  //console.log(`Dear ${guestName}, you are invired to dinner please join us.`)
  
//})

//console.log(`Mr ${not_coming}, is not coming for dinner`)

//guestlist.unshift(`Ronaldo`);
//guestlist.splice(guestlist.length/2, 2, "Messi");
//guestlist.push("Babar Azam")
//guestlist.forEach((guestName) =>
  //{
    //console.log(`Dear ${guestName}, you are invired to dinner please join us.`)
    
  //})
  
  //console.log(`we have found a bigger table so we invited more guest`)

//question 17 

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.


let guestlist: Array<string> = [
  'Ali Phul',
  'Zia Khan',
  'Sami',
  'Mian Asif',
  'Abid Shirwani',
  'Alee'
]

console.log(`I can invite only two people for dinner`)

while(guestlist.length > 2){
  let remove_guest = guestlist.pop()
  console.log(`Sorry, ${remove_guest}, I cant invite you to dinner` )
}

//PART 3  

for(let guestName of guestlist){
  console.log(`Hello, ${guestlist},you are still invited to the dinner`)

}

//PART 4
guestlist.pop()
guestlist.pop()

console.log(`guest list after dinner ${guestlist}`)