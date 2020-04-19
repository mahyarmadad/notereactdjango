import React, { useState, Fragment, useEffect } from 'react';
import { Button, Container, Row, Col } from "reactstrap"
import ListNotes from "./components/ListNotes"
import { fetchNotes, fetchNote, updateNote, addNote } from './api';
import AddNoteForm from './components/AddNoteForm';
import Websocket from 'react-websocket';
import EditNoteForm from './components/EditNoteForm';



function App() {
  const [notes, setnotes] = useState([]);
  const [current_id, setcurrent_id] = useState(0);
  const [is_creating, setis_creating] = useState(true);
  const [note, setnote] = useState({ title: '', content: '' });

  useEffect(() => {
    getData();
  }, []);

  function handleItemClick(id) {
    const click = async () => {
      let selected_note = await fetchNote(id);
      setnote(selected_note);
    }
    setcurrent_id(id)
    setis_creating(false)
    click();
  }

  function handleAddNote() {
    setis_creating(true)
  }

  function handleSaveNote(data) {
    const saveData = async () => {
      await addNote(data);
      let da = await fetchNotes();
      setnotes(da);
    }
    saveData();
    getData();
  }

  function getData() {
    const getdata = async () => {
      let data = await fetchNotes();
      setnotes(data);
    }
    getdata();
  }
  function handleData(data) {
    let result = JSON.parse(data);
    if (current_id === result.id) {
      setnotes(result)
    }
  }
  function handleOnChange(e) {
    let content = e.target.value;
    let current_note = note;
    current_note.content = content;
    setnote(current_note);
    const updata = async () => {
      await updateNote(current_note);
    }
    updata();
  }

  return (
    <Fragment>
      <Container>
        <Row>
          <Col xs="10">
            <h2>Realtime notes</h2>
          </Col>
          <Col xs="2">
            <Button color="primary" onClick={handleAddNote}>Create Note</Button>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <ListNotes notes={notes} handleItemClick={(id) => handleItemClick(id)} />
            <h5>List of Our Notes</h5>
          </Col>
          <Col xs="8">
            {is_creating ? <AddNoteForm handleSave={handleSaveNote} /> :
              <EditNoteForm note={note} handleChange={handleOnChange} />}

          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
