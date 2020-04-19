import React from 'react';
import { Form, FormGroup, Input, Card, CardTitle, CardText } from "reactstrap";

function EditNoteForm({ note, handleChange }) {
    return (
        <Form>
            <Card>
                <FormGroup>
                    <CardTitle>{note.title}</CardTitle>
                    <Input onChange={handleChange} value={note.content} type="textarea" name="content" />
                </FormGroup>
            </Card>
        </Form>
    );
}

export default EditNoteForm;