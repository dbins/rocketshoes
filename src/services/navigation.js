import { NavigationActions } from 'react-navigation';

let navigator;

function set(ref) {
  navigator = ref;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function back() {
  navigator.dispatch(NavigationActions.back());
}

export default {
  navigate,
  back,
  set,
};
