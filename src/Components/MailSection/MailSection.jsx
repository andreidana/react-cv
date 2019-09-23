import React from 'react';

import Input from '../../Atoms/Input/Input';
import Textarea from '../../Atoms/Textarea/Textarea';
import Button from 'react-bootstrap/Button';

const MailSection = () => {
    const textAreaRows = 5;

    return (
        <div>
            <Input type='text' name='name' id='nameId' placeholder='NAME'></Input>
            <Input type='text' name='email' id='emailId' placeholder='E-MAIL'></Input>
            <Input type='text' name='subject' id='subjectId' placeholder='SUBJECT'></Input>
            <Textarea type='text' name='content' id='contentId' placeholder='CONTENT' rows={textAreaRows}></Textarea>
            <Button variant="primary">Send</Button>
        </div>
    );
};
export default MailSection;