<template>

    <v-container>

        <form-ventas></form-ventas>

    </v-container>

</template>

<script>
import FormVentas from '~/components/forms/FormVentas.vue';

export default {
    middleware: 'auth-adm',
    components: {
        FormVentas
    }
}
</script>