//Model
const app = document.getElementById('app');
let notePad = [];



//View
updateView()
function updateView(){ 
  let noteHtml = '';
  for (let  i = 0; i < notePad.length; i++) {
    noteHtml+= `<textarea 
    placeholder="Empty Note"
    class="noteBox" 
    ondblclick="deleteNote(${i})" 
    oninput="editNote(this.value, ${i})">${notePad[i]}</textarea>`;
  }

    let html = /*html*/ `
    <h1 id="heading">Note App</h1>
    <h2 id="infoText">Double click on a note to remove it</h2>
    <div class="inputArea">
    <textarea id="writeNote" placeholder="Empty Note"></textarea>
    <button id="btn" onclick="addNote()">+</button>
      <div id="notesArea">
      ${noteHtml}
      
    </div>
    `;
  
    app.innerHTML = html;

};


//Controller

function addNote(){
  let noteText = document.getElementById('writeNote').value;
   notePad.push(noteText);
   document.getElementById('writeNote').value = '';
  updateView()
}

function deleteNote(index) {
notePad.splice(index, 1); 
alert('Are you sure you want to delete this note?');
updateView();
}

function editNote(newText, index) {
  notePad[index] = newText;
}









