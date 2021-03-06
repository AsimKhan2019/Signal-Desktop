// Copyright 2020 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { gifUrl } from '../storybook/Fixtures';
import { setup as setupI18n } from '../../js/modules/i18n';
import enMessages from '../../_locales/en/messages.json';
import { ContactListItem } from './ContactListItem';

const i18n = setupI18n('en', enMessages);
const onClick = action('onClick');

storiesOf('Components/ContactListItem', module)
  .add("It's me!", () => {
    return (
      <ContactListItem
        i18n={i18n}
        isMe
        title="Someone ð¥ Somewhere"
        name="Someone ð¥ Somewhere"
        phoneNumber="(202) 555-0011"
        profileName="ð¥Flamesð¥"
        avatarPath={gifUrl}
        onClick={onClick}
      />
    );
  })
  .add('With name and profile (note vertical spacing)', () => {
    return (
      <div>
        <ContactListItem
          i18n={i18n}
          title="Someone ð¥ Somewhere"
          name="Someone ð¥ Somewhere"
          phoneNumber="(202) 555-0011"
          profileName="ð¥Flamesð¥"
          about="ð Free to chat"
          avatarPath={gifUrl}
          onClick={onClick}
        />
        <ContactListItem
          i18n={i18n}
          title="Another âï¸ Yes"
          name="Another âï¸ Yes"
          phoneNumber="(202) 555-0011"
          profileName="âï¸Iceâï¸"
          about="ð Be kind"
          avatarPath={gifUrl}
          onClick={onClick}
        />
      </div>
    );
  })
  .add('With name and profile, admin', () => {
    return (
      <ContactListItem
        i18n={i18n}
        isAdmin
        title="Someone ð¥ Somewhere"
        name="Someone ð¥ Somewhere"
        phoneNumber="(202) 555-0011"
        profileName="ð¥Flamesð¥"
        about="ð This is my really long status message that I have in order to test line breaking"
        avatarPath={gifUrl}
        onClick={onClick}
      />
    );
  })
  .add('With just number, admin', () => {
    return (
      <ContactListItem
        i18n={i18n}
        isAdmin
        title="(202) 555-0011"
        phoneNumber="(202) 555-0011"
        about="ð Free to chat"
        avatarPath={gifUrl}
        onClick={onClick}
      />
    );
  })
  .add('With name and profile, no avatar', () => {
    return (
      <ContactListItem
        i18n={i18n}
        title="Someone ð¥ Somewhere"
        name="Someone ð¥ Somewhere"
        color="teal"
        phoneNumber="(202) 555-0011"
        profileName="ð¥Flamesð¥"
        about="ð Free to chat"
        onClick={onClick}
      />
    );
  })
  .add('Profile, no name, no avatar', () => {
    return (
      <ContactListItem
        i18n={i18n}
        phoneNumber="(202) 555-0011"
        title="ð¥Flamesð¥"
        profileName="ð¥Flamesð¥"
        about="ð Free to chat"
        onClick={onClick}
      />
    );
  })
  .add('No name, no profile, no avatar, no about', () => {
    return (
      <ContactListItem
        i18n={i18n}
        phoneNumber="(202) 555-0011"
        title="(202) 555-0011"
        onClick={onClick}
      />
    );
  })
  .add('No name, no profile, no avatar', () => {
    return (
      <ContactListItem
        i18n={i18n}
        title="(202) 555-0011"
        about="ð Free to chat"
        phoneNumber="(202) 555-0011"
        onClick={onClick}
      />
    );
  })
  .add('No name, no profile, no number', () => {
    return (
      <ContactListItem i18n={i18n} title="Unknown contact" onClick={onClick} />
    );
  });
