<template>

    <v-container>

        <form-plato></form-plato>

    </v-container>

</template>

<script>

import FormPlato from '~/components/forms/FormPlato.vue';

export default {
    middleware: 'auth-res',
    layout: 'menu-rest',
    components: {
        FormPlato
    }
}
</script>