export default {
    // inja be jaye {species,pet} payload neveshtam
    // payload mishe payload.species va payload.pet hast dagigan 
    addPet: ({commit}, payload) =>{
        commit('appendPet',payload)
    }
}