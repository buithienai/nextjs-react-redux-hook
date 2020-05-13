import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';

class Root extends Component {
	render() {
		return (
			<div>
				<Head>
					<title>Reactjs with redux-saga</title>
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<link rel="icon" href="../static/favicon.ico" />
				</Head>
				<div className="App">
					<div className="App-header">
						<ul>
							<li><Link href="/"><a>Home</a></Link></li>
							<li><Link href="/dashboard"><a>Dashboard</a></Link></li>
						</ul>
					</div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Root;