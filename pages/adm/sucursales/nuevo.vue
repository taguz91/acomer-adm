<template>

    <v-container>

        <form-sucursal></form-sucursal>

    </v-container>

</template>

<script>
import FormSucursal from '~/components/forms/FormSucursal.vue';

export default {
    middleware: 'auth-adm',
    components: {
        FormSucursal
    }
}
</script>