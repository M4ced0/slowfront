<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>

export default{
  methods:{
    showAlert(type, msg) {
        var textMsg = '';

        if (msg.message) {
            if (typeof msg.errors === 'object' && msg.errors) {
                for (const key in msg.errors) {
                    if (Object.prototype.hasOwnProperty.call(msg.errors, key)) {
                    const errorMessages = msg.errors[key];
                    textMsg += `${errorMessages.join(', ')}<br>`;
                    }
                }
            } else {
                textMsg = `${msg.message}`;
            }
        } else {
            textMsg = `${msg}`;
        }

        this.$swal({
            text: textMsg,
            confirmButtonText: 'Confirm',
            html: textMsg,
            icon: type
        });
    },
    amountConverted(value){
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    }
  }
}

</script>

<style>
@import url(@/assets/css/main.css);
</style>
