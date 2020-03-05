/**
 * Provides API functions to create a datastore for a module.
 *
 * Site Kit by Google, Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import Data from 'googlesitekit-data';
import {
	createNotificationsStore,
} from '../data/create-notifications-store';

export const createModuleStore = ( slug ) => {
	const notifications = createNotificationsStore( 'modules', slug, 'notifications' );

	const INITIAL_STATE = Data.collectState( notifications.INITIAL_STATE );
	const actions = Data.collectActions( notifications.actions );
	const controls = Data.collectControls( notifications.controls );
	const reducer = Data.collectReducers( INITIAL_STATE, [ notifications.reducer ] );
	const resolvers = Data.collectResolvers( notifications.resolvers );
	const selectors = Data.collectSelectors( notifications.resolvers );

	return {
		INITIAL_STATE,
		actions,
		controls,
		reducer,
		resolvers,
		selectors,
	};
};
