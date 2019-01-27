
const user = {email: 'jdoe@gmail.com'};

// Can handle errors without stopping entire script
try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError
  // eval('Hello world');

  // Will produce a URIError
  // decodeURIComponent('%');

  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name.');
  }

} catch(e) {
  console.log(e);
  // console.log(`${e.name}: It is null, idiot`);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
  // console.log(e instanceof TypeError);
  
} finally {
  console.log('Finally runs regardless of results...');
  
}
console.log('Program continues....');
