import EventService from './service';
import uuid from 'uuid/v4';

const SESSION_ID = uuid();

export default ({ appId, endpoint='http://duxdash.com/api/v1', sessionId }) => store => next => action => {
  if (!appId) {
    console.log('DuxDash application ID is missing. Requests will not get logged.');
  } else {
    try {
      EventService(appId, endpoint).push({
        epoch: new Date().getTime(),
        sessionId: sessionId || SESSION_ID,
        action,
      });
    } catch (err) {
      // Don't do anything. Fail silently.
    }
  }

  return next(action);
};
