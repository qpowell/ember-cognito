import EmberObject, { get } from '@ember/object';
import RSVP from 'rsvp';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

const MockUser = EmberObject.extend({
  userAttributes: [],

  getUserAttributes() {
    return RSVP.resolve(get(this, 'userAttributes').map(({ name, value }) => {
      return new CognitoUserAttribute({ Name: name, Value: value });
    }));
  }
});

export { MockUser };
