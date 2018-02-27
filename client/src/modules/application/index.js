import React from 'react';
import BasePresenter from '../../base/presenter';

import Header from './header';
import Footer from './footer';

import Repo from '../repo';

import './styles.css';

export default class ApplicationPresenter extends BasePresenter {
	render() {
		return (
			<div className="presenter-application">
				<Header />
				<Repo />
				<Footer />
			</div>
		);
	}
}
