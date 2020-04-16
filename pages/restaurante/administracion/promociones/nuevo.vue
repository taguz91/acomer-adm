<template>

    <v-container>

        <form-promocion></form-promocion>

    </v-container>

</template>

<script>

import FormPromocion from "~/components/forms/FormPromocion.vue";

export default {
    layout: 'menu-rest',
    components: {
        FormPromocion
    }
}
</script>