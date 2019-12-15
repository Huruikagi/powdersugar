import React from 'react';
import './App.css';
import Workspace from "./Workspace";
import Preview from "./Preview";
import EditorState from "../state/EditorState";

class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = {
            editor: {
                value: ""
            }
        };
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <Workspace
                    editorState={this.state.editor}
                    onEditorStateChange={
                        (newState) => this.updateEditorState(newState)
                    }
                />
                <Preview editorText={this.state.editor.value} />
            </div>
        );
    }

    private updateEditorState(editor: EditorState) {
        console.log(editor);
        this.setState({
            ...this.state,
            editor
        });
    }
}

interface AppProps {
}

interface AppState {
    editor: EditorState;
}

export default App;
