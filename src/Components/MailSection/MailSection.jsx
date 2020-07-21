import React from 'react';

import Button from 'react-bootstrap/Button';
import Input from '../../Atoms/Input/Input';
import Textarea from '../../Atoms/Textarea/Textarea';

const MailSection = () => {
  const textAreaRows = 5;

  return (
    <div>
      <Input type="text" name="name" id="nameId" placeholder="NAME" />
      <Input type="text" name="email" id="emailId" placeholder="E-MAIL" />
      <Input type="text" name="subject" id="subjectId" placeholder="SUBJECT" />
      <Textarea type="text" name="content" id="contentId" placeholder="CONTENT" rows={textAreaRows} />
      <Button variant="primary">Send</Button>
    </div>
  );
};
export default MailSection;
