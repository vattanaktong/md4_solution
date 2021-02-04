(function(){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (let name of names) {
  if (name.toLowerCase().includes('j'))
    byeSpeaker.speak(name);
  else helloSpeaker.speak(name);
};
})();