import { NavigationActions } from 'react-navigation';

let navigator;

export function setNavigator(ref) {
  navigator = ref;
}

export function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export function back() {
  navigator.dispatch(NavigationActions.back());
}

