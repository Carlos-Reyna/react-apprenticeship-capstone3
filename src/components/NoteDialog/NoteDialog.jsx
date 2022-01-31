import React from 'react';
import reactDom from 'react-dom';
import { Modal, ModalBody } from '../Styled';
import NoteForm from '../Noteform';

function NoteDialog({ note, setShow, isUpdate, valueOnArchived }) {
  return reactDom.createPortal(
    <Modal>
      <ModalBody>
        <NoteForm
          note={note}
          isUpdate={isUpdate}
          setShow={setShow}
          valueOnArchived={valueOnArchived}
        />
      </ModalBody>
    </Modal>,
    document.getElementById('modal')
  );
}

export default NoteDialog;
