<template>
  <div class="what">
    Trying out the first route with Vue! By {{ namecustom }}.
  </div>
</template>
<script>

export default {
  name: 'What',
  data() {
    return {
      namecustom: 'Divyam Rastogi',
    };
  },
};
</script>
<style scoped></style>