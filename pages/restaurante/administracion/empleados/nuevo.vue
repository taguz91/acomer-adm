<template>

    <v-container>
        <form-empleado></form-empleado>
    </v-container>

</template>

<script>
import FormEmpleado from '~/components/forms/FormEmpleado.vue';

export default {
    middleware: 'auth-res',
    layout: 'menu-rest',
    components: {
        FormEmpleado
    }
}
</script>