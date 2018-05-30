<template>
    <div>
        <transition name="fade">
            <div v-show="show">{{ myVal }}</div>
        </transition>
        <button @click="toggle"> emit </button>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            'my-val': [String]
        },
        data(){
            return {
                msg: 'hello vue',
                show: true
            }
        },
        methods: {
            emitMyEvent (){
                this.$emit('my-event', this.msg);
            },
            toggle (){
                this.show = !this.show;
            }
        }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
