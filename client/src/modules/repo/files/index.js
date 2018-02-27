import React from 'react';
import BaseComponent from '../../../base/component';

import File from './file';

import './styles.css';

export default class RepoFilesComponent extends BaseComponent {
	render() {
		return (
			<div className="repo-files-component">
				<div class="files-header"></div>
				<div class="files-body">
					<File isFolder={true} />
					<File isFolder={true} />
					<File isFolder={true} />
					<File isFolder={true} />
					<File isFolder={true} />
					<File isFolder={true} />
					<File isFolder={true} />
					<File isFolder={true} />
					<File isFolder={true} />
					<File isFolder={true} />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
				</div>
			</div>
		);
	}
}
