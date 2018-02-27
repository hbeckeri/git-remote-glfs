import React from 'react';
import BaseComponent from '../../../base/component';

import './styles.css';

export default class PaperComponent extends BaseComponent {
	render() {
		return (
			<div class={`component-paper ${this.props.className || '' }`}>
				{this.props.children}
			</div>
		);
	}
}
