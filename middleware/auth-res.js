export default function ({ store, error }) {
  if (!store.state.authUser && !store.state.userType && store.state.userType == 2) {
    error({
      message: 'No tienes permiso para ver esto...',
      statusCode: 403
    });
  }
}