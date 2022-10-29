import httpService from "./http.service"
const endPoint = "/todos"
const todosService = {
    fetch: async() => {
        const {data} = await httpService.get(endPoint, {params: {
            _page: 1,
            _lint: 10
        }})
        return data 
    },
    add: async (content) => {
        const {data} = await httpService.post(endPoint, content)
        return data
    }
}
export default todosService