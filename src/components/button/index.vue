<template>
    <div>
        <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        >
    </div>
</template>
<script>
export default {
    name:'custom-input',
    props: {
        value: String
    }
}
</script>
