export default function ({ store, error }) {
  if (!store.state.authUser && !store.state.userType && store.state.userType != 2) {
    error({
      message: 'No tienes permiso para ver esto...',
      statusCode: 403
    });
  }

  if (store.state.userType != 2) {
    error({
      message: 'Tu no eres un restaurante que forma parte de nuestro gran servicio. <br>Para volverte parte de nuestra gran servicio contantanos al siguiente numero: <strong>0968796010</strong>',
      statusCode: 403
    });
  }

}