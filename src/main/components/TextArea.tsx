import React from "react";
import EditorState from "../state/EditorState";

class TextArea extends React.Component<TextAreaProps> {

    public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <textarea
                placeholder="ここに貼り付けテキスト"
                onKeyUp={event => this.onEdit(event)}
                onMouseUp={event => this.onEdit(event)}
                defaultValue={this.props.editorText}
            />
        );
    }

    private onEdit(event: React.KeyboardEvent | React.MouseEvent) {
        const target = event.currentTarget as HTMLTextAreaElement;

        this.props.onEditorStateChange({
            value: target.value,
            selectionStart: target.selectionStart,
            selectionEnd: target.selectionEnd
        });
    }

}

interface TextAreaProps {
    editorText: string;
    onEditorStateChange: (newState: EditorState) => void;
}

export default TextArea;
