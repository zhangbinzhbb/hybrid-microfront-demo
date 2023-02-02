<template>
  <div
    >项目1-测试

    <Button />
  </div>
</template>

<script>
  // import Button from 'app1/Button'
  export default {
    Button: () => import('app1/Button')
    // Button
  }
</script>
