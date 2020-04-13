import configureStore from 'redux-mock-store';
import { loadingInitialState } from '../../src/redux/reducers/loadingReducer';
import isLoading from '../../src/utils/isLoading';

const mockStore = configureStore();

describe('isLoading', () => {
  it('should check if user is signing in', () => {
    const store = mockStore({
      ...loadingInitialState,
      loadingRequests: ['sign_in'],
    });

    expect(isLoading('sign_in', store)).toEqual(true);
  });

  it('should check if user is activating account', () => {
    const store = mockStore({
      ...loadingInitialState,
      loadingRequests: [],
    });

    expect(isLoading('activating_account', store)).toEqual(false);
  });
});
