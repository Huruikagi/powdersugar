import React from "react";
import EditorState from "../state/EditorState";

class EditorControlPanel extends React.Component<EditorControlPanelProps> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <button>&lt;p&gt;</button>
            </div>
        );
    }

}

interface EditorControlPanelProps {
    onEditorStateChange: (newState: EditorState) => void;
}

export default EditorControlPanel;
