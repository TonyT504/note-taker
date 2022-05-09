const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Notes {
    readNotes(){
        return readFile("db/db.json", "UTF-8");
    }
    writeNotes(notes){
        return writeFile("db/db.json", JSON.stringify(notes));
    }
    getNotes(){
        return this.readNotes().then(notes => {
            let notesArray = [];
            try {
                notesArray = notesArray.concat(JSON.parse(notes));
            } catch (error) {
                notesArray = [];
            }
            return notesArray;
        });
    }
    addNote(note){
        const noteObject = {title:note.title, text: note.text, id:uuidv4()}
       return this.getNotes().then(notesArray => [...notesArray, noteObject]).then(newNotesArray => this.writeNotes(newNotesArray));
    }
}

module.exports = new Notes();