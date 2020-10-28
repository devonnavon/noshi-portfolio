<template>
  <!-- sorting logic would prob go here? maybe a listener once you click the shuffle -->
  <div>
    <!-- for each loop creating an instance of a work card -->
    <CaseCard />
    <CaseCard />
    <CaseCard />
    <CaseCard />
  </div>
</template>

<script>
import CaseCard from '~/components/WorkPage/CaseCard'

export default {
  methods: {},
  components: {
    CaseCard,
  },
}
</script>

<style></style>
