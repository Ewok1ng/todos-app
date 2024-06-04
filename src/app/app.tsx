import ReactDOM from 'react-dom/client';
import React from 'react';

import 'virtual:svg-icons-register';

import { HomePage } from '@pages/home';

import { Providers } from './providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Providers>
			<HomePage />
		</Providers>
	</React.StrictMode>
);
