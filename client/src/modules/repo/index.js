import React from 'react';
import BasePresenter from '../../base/presenter';

import Tabs from './tabs';
import Files from './files';

import './styles.css';

export default class RepoPresenter extends BasePresenter {
	render() {
		return (
			<div class="presenter-repo">
				<div class="repo-header">
					<div class="repo-header-title">
						<a href="google.com" class="repo-header-title-item">hbeckeri</a>
						<div class="repo-header-title-divider">/</div>
						<a href="google.com" class="repo-header-title-item repo-header-title-item-repo">0x11d3076e30250d1e7d44a293bc0c957cd1f114b6</a>
					</div>
				</div>
				<div class="repo-body">
					<Tabs />
					<Files />
				</div>
			</div>
		);
	}
}
