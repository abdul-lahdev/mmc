'use client';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
);
const CKEditorComponent = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onEditorStateChange = (newEditorState) => {
        setEditorState(newEditorState);
    };

    // npm install draft-js react-draft-wysiwyg

    return (
        <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            wrapperClassName="border border-[#e5e7eb] rounded-md p-2 shadow-sm flex flex-col-reverse"
            editorClassName="min-h-[200px] text-lg p-2 bg-white focus:outline-none"
            toolbar={{
                options: ['inline', 'blockType', 'list', 'link', 'image'],
                inline: {
                    inDropdown: false,
                    options: ['bold', 'italic'],
                },
                blockType: {
                    inDropdown: true,
                    options: ['Normal', 'H1', 'H2', 'H3'],
                },
                list: {
                    inDropdown: false,
                    options: ['unordered', 'ordered'],
                },
                link: {
                    inDropdown: false,
                    showOpenOptionOnHover: true,
                    defaultTargetOption: '_blank',
                },
                image: {
                    urlEnabled: true,
                    uploadEnabled: false,
                    alignmentEnabled: true,
                    previewImage: true,
                    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                    alt: { present: true, mandatory: false },
                },
            }}
        />
    );
};
export default CKEditorComponent;