import React from 'react';
import BaseComponent from '../../../../base/component';

import './styles.css';

export default class FilesFileComponent extends BaseComponent {
	render() {
		return (
			<div class="component-file">
				{this.props.isFolder ? this.renderFolderIcon() : this.renderFileIcon()}
				<div class="file-name">foobar.txt</div>
				<div class="file-commit">something silly</div>
				<div class="file-modified">12 days ago</div>
			</div>
		);
	}

	renderFileIcon() {
		return (
			<svg aria-hidden="true" class="file-icon" height="16" viewBox="0 0 12 16" width="12">
				<path fill="rgba(3,47,98,0.55)" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path>
			</svg>
		);
	}

	renderFolderIcon() {
		return (
			<svg aria-hidden="true" class="file-icon" height="16" viewBox="0 0 14 16" width="14">
				<path fill="rgba(3,47,98,0.55)" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"></path>
			</svg>
		);
	}
}
