import loadingReducer, {
  loadingInitialState,
} from '../../../src/redux/reducers/loadingReducer';

import {
  _startLoading,
  _doneLoading,
} from '../../../src/redux/actions/creators/loading';

describe('loading reducer', () => {
  it('should return the initial state', () => {
    expect(loadingReducer(undefined, {})).toBe(loadingInitialState);
  });

  it('should handle START_LOADING', () => {
    expect(
      loadingReducer(loadingInitialState, _startLoading('sign_in'))
    ).toEqual({
      loadingRequests: ['sign_in'],
    });
  });

  it('should handle DONE_LOADING', () => {
    expect(
      loadingReducer(
        {
          ...loadingInitialState,
          loadingRequests: ['sign_in', 'activating_account'],
        },
        _doneLoading('sign_in')
      )
    ).toEqual({
      loadingRequests: ['activating_account'],
    });
  });
});
