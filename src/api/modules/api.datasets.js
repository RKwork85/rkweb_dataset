import service from '../server'
export const dataset_List = () => {
    return service.get('/v1/work/datasets/list')
}
export const dataset_Create = (data) => {
    return service.post('/v1/work/datasets/create', data)
}
export const dataset_Update = (data) => {
    return service.post('/v1/work/datasets/update', data)
}
export const dataset_Synchronize = (data) => {
    return service.post('/v1/work/datasets/synchronize', data)
}
export const dataset_Delete = (data) => {
    return service.post('/v1/work/datasets/delete', data)
}
export const dataset_UploadMd = (data) => {
    return service.post('/v1/work/datasets/uploadMd', data)
}




