export default function ({ store, error }) {
  if (!store.state.authUser && !store.state.userType && store.state.userType != 1) {
    error({
      message: 'No tienes el poder de administracion ... GO OUT HERE ... mi amigo',
      statusCode: 403
    });
  }

  if (store.state.userType != 1) {
    error({
      message: 'No tienes el poder de administracion ... GO OUT HERE ... mi amigo',
      statusCode: 403
    });
  }

}