<template>
    <v-container>
        <form-usuario></form-usuario>
    </v-container>
</template>

<script>
import FormUsuario from '~/components/forms/FormUsuario.vue';

export default {
    middleware: 'auth-adm',
    components: {
        FormUsuario
    }
}
</script>