import React from 'react';
import { action } from '@storybook/addon-actions';
import  Button  from '../src/button';

export default {
  title: '@abl/Button',
  component: Button,
};

export const basic = () => <Button />;

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
