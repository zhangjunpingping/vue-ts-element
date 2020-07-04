import { request } from '@/services/request'

const api = {
  getList: {
    url: 'noticeAnnouncement/list',
    method: 'get'
  },
  deleteFaceUser: (facesetId, faceIds) => {
    return {
      url: `/openapi/v1/facesets/${facesetId}/faces/${faceIds}`,
      method: 'delete'
    }
  }
}

export default {
  // 创建项目保存,返回项目id
  async saveCreate(payload) {
    return request(api.getList, payload)
    // if (response && response.error === 0) {
    //   return response.data.id
    // } else {
    //   return response
    // }
  }
}
