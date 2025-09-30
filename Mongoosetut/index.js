const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
//   {
//     console.log("We are connected bro/sis");
//   }
}
const kittySchema = new mongoose.Schema({
  name: String,
});

kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? 'Meow my name is ' + this.name
      : 'I don\'t have a name';
    console.log(greeting);
  };

const Kitten = mongoose.model('harrykitty', kittySchema);

const silence = new Kitten({ name: 'harrykitty' });
// console.log(silence.name);
// silence.speak();
silence.save();
// silence.speak();

const kittens = Kitten.find();
console.log(kittens);
Kitten.find({ name: silence });
