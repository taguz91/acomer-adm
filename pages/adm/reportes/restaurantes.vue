<template>
  <no-ssr>
    <div class="container">

      <div class="card">
    <div class="card-body">
      <h2 class="card-title">Ventas restaurantes: </h2>

      <div class="btn-group btn-group-toggle">
        <label
          v-for="(item, index) in btn"
          :key="index"
          :class="{ active: item.value == radio }"
          class="btn btn-success"
        >
          <input
            v-model="radio"
            :name="dataLabel"
            :value="item.value"
            type="radio"
          />
          {{ item.label }}
        </label>
      </div>
    </div>

    <div class="card-img-bottom">
      <chartjs-line
        :backgroundcolor="bgColor"
        :beginzero="beginZero"
        :bind="true"
        :bordercolor="borderColor"
        :data="data[radio]"
        :datalabel="dataLabel"
        :labels="labels[radio]"
      />
    </div>
  </div>


    </div>
  </no-ssr>
</template>

<script>
export default {
  data() {
    return {
      bgColor: "#81894e",
      beginZero: true,
      borderColor: "#0E4655",
      btn: [
        { label: "Todos", value: "all" }
      ],
      data: {
        all: [10, 3, 5, 3, 1, 1, 2,3, 14, 12, 20, 50, 12]
      },
      dataLabel: "Suscripciones Restaurantes",
      labels: {
        all: ['20/12/2020', '10/12/12'],
      },
      radio: "all"
    };
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  row-gap: 2rem;
}
</style>