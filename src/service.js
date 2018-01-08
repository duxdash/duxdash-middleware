import fetch from 'isomorphic-fetch';

export default (appId, endpoint) => ({
  push(event) {
    return fetch(`${endpoint}/api/v1/events`, {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ app_id: appId, events: [ event ] }),
    });
  }
});

