import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TextField  from '../components/TextField/TextField.js';
import WelcomePage  from '../containers/WelcomePage/WelcomePage.js'

const user = {name:"Roey Kudra"};
storiesOf('TextField', module).add('with name', () =><TextField name="2"/>);
storiesOf('WelcomePage', module).add('with name', () =><WelcomePage user={user}/>);

