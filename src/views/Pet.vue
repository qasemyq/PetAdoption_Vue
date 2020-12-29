<template>
    <div>
       <h1>Name: {{animal.name}}({{$route.params.species}})</h1> 
         <p>The age is: {{animal.age}} years old</p>
         <p>{{animal.breed}}</p>
         <h1>Notes: {{animal.notes}}</h1>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            animal: {}
        }
    },
    computed:{
        ...mapState([
            'cats',
            'dogs'
        ])
    },
    mounted() {
        // this.$route.params.species esme heyun hast
        // his[this.$route.params.species] barabare ba dastrasi be dataye ke bala hast yani this.cats this.dogs  
        // this.$route.params.id]   inja ham index heyvun ro midam
        const animal = this[this.$route.params.species][this.$route.params.id]
        this.animal = animal // in animal hamun animal hast ke dar data sakhtam animal: {}
    }
}
</script>