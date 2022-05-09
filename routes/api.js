const router = require('express').Router();
const Notes = require('../db/fixNotes')
router.get('/api/notes', function (req, res){
    Notes.getNotes().then(notes => res.json(notes)).catch(err => res.status(500).json(err))
})

router.post('/api/notes', function (req, res){
    Notes.addNote(req.body).then(() => res.json({msg:"success"})).catch(err => res.status(500).json(err))
})

module.exports = router