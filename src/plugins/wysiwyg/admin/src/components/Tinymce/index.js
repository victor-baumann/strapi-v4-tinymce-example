import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PropTypes from 'prop-types';

const TinyEditor = ({
  disabled,
  editorRef,
  error,
  isPreviewMode,
  name,
  onChange,
  placeholder,
  textareaRef,
  value,
}) => {
  const onChangeRef = useRef(onChange);

  function onBlur(ev, editor){
    const content = editor.getContent();
    onChangeRef.current({ target: { name, value: content, type: 'wysiwyg' } });
  }

  return (
    <>
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        onBlur={onBlur}
        initialValue={value}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />

    </>
  );
}

TinyEditor.defaultProps = {
  disabled: false,
  error: undefined,
  isPreviewMode: false,
  placeholder: '',
  value: '',
};

TinyEditor.propTypes = {
  disabled: PropTypes.bool,
  editorRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  error: PropTypes.string,
  isPreviewMode: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  textareaRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  value: PropTypes.string,
};

export default TinyEditor;