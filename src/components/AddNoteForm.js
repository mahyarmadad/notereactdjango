import React, { Fragment, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function AddNoteForm({ handleSave }) {

    const [nota, setnota] = useState({ title: '', content: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSave(nota);
        setnota({ title: "", content: "" });
    }

    const updateField = e => {
        setnota({ ...nota, [e.target.name]: e.target.value });
        e.preventDefault();
    };

    return (
        <Fragment>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input onChange={updateField} name="title" type="text" value={nota.title} />
                </FormGroup>
                <FormGroup>
                    <Label>Content</Label>
                    <Input onChange={updateField} name="content" type="text" value={nota.content} />
                </FormGroup>
                <Button color="success">Save</Button>
            </Form>
        </Fragment>
    );
}

export default AddNoteForm;