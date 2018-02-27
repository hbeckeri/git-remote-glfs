import React from 'react';
import BaseComponent from '../../../base/component';

import './styles.css';

export default class RepoTabsComponent extends BaseComponent {
	render() {
		return (
			<div className="repo-tabs-component">
				<div class="repo-tabs-items">
					<div class="repo-tabs-items-item">
						<span class="repo-tabs-items-item-count">939 </span>
						commits
					</div>
					<div class="repo-tabs-items-item">
						<span class="repo-tabs-items-item-count">4 </span>
						branches
					</div>
					<div class="repo-tabs-items-item">
						<span class="repo-tabs-items-item-count">2 </span>
						releases
					</div>
					<div class="repo-tabs-items-item">
						<span class="repo-tabs-items-item-count">29 </span>
						contributors
					</div>
				</div>
				<div class="repo-tabs-progress"></div>
			</div>
		);
	}
}
