import {ref , onMounted , watch, watchEffect }  from 'vue'

export const useFetchApi = (callback)=>{
    const data = ref(null);
    const loading = ref(false);
    const error = ref(null);
    async function fetchData(){
        loading.value = true;
        error.value = null;
        try{
            const response = await callback();
            console.log(response.data.Search);
            data.value = await response.data.Search;
        }catch(err){
            error.value = err;
        }finally{
            loading.value = false;
        }
    }
    watchEffect(fetchData)
    return {
        data,
        loading,
        error,
        fetchData,
    }
}
