import React from "react";

class Preview extends React.Component<PreviewProps> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <h2>Preview:</h2>
                <div
                    dangerouslySetInnerHTML={{__html: this.props.editorText}}
                />
            </div>
        );
    }
}

interface PreviewProps {
    editorText: string;
}

export default Preview;
