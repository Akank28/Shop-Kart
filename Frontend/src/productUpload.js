import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


class ProdUp extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: String,
			file: null,
			price: '',
			description: String
		}
	}

	render() {

		return (

			    <div class="container">
			        <div class="row justify-content-center">
			            
			            <div class="col-xs">
			                <h1 class="text-center mt-5">Upload Files</h1>
			                <form method="POST" action="/upload" enctype="multipart/form-data">
			                    <div class="text-center">
			                        
			                    </div>
			                    <div class="form-group upload-area">
			                        <label for="exampleFormControlFile1">Click Here To upload Files</label>
			                        <input type="file" name="files" class="form-control-file" id="exampleFormControlFile1" />
			                    </div>
			                    <div class="form-group">
			                        <button type="submit" class="btn btn-primary">Upload</button>
			                    </div>
			                </form>
			            </div>
			            
			        </div>
			    </div>
			);
	}

}

export default ProdUp;