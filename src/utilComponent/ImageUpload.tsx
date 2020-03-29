import * as React from 'react';
import * as Constants from './../Constants';

class ImageUpload extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onFileChangeHandler = this.onFileChangeHandler.bind(this);
        this.sendFile = this.sendFile.bind(this);
    }

    onFileChangeHandler(event:any) {
        event.preventDefault();
        this.setState({
            file: event.target.files[0]
        });
    }

    sendFile(){
        const formData = new FormData();
        formData.append("file", this.state.file);
        fetch(Constants.IMAGE_UPLOAD_URL, {
            method: 'post',
            body: formData,
        }).then(res => {
            if(res.ok) {
                console.log("file uploaded");
                alert("Image uploaded");
            }
        });
    }

    render() {
        return (
            <div className="upload-image">
                <label>Upload file</label> <br/>
                <input type="file" onChange={this.onFileChangeHandler}/> <br/>
                <button onClick={this.sendFile}>Send</button>
            </div>
        )
    }
}

export default ImageUpload;
