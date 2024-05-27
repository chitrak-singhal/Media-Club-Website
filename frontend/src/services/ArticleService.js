import supabase from "../config/supabaseClient"

const fetchArticles = async () => {
    const{data,error} = await supabase
    .from('articles')
    .select('*')
    return {data,error}
}

export default{
    fetchArticles,
}