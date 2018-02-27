import React from 'react';
import BaseComponent from '../../../base/component';

import './styles.css';

export default class HeaderComponent extends BaseComponent {
	render() {
		return (
			<div class="header-component">
				<div class="header-body">
					<div class="header-logo">Git Ledger</div>
				</div>
			</div>
		);
	}
}
