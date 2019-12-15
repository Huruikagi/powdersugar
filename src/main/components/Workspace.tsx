import React from "react";
import TextArea from "./TextArea";
import EditorControlPanel from "./EditorControlPanel";
import EditorState from "../state/EditorState";

const Workspace: React.FC<WorkspaceProps> = (props: WorkspaceProps) => (
    <div>
        <TextArea
            editorText={props.editorState.value}
            onEditorStateChange={props.onEditorStateChange}
        />
        <EditorControlPanel
            onEditorStateChange={props.onEditorStateChange}
        />
    </div>
);

interface WorkspaceProps {
    editorState: EditorState;
    onEditorStateChange: (newState: EditorState) => void;
}

export default Workspace;
