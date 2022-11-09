import axios from "axios";

class MemberDataService {
    getAll() {
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/member/`);
    }
    addMember(data) {
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/member/`, data)
    }
    updateMember(id, data) {
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/member/${id}`, data)
    }
    deleteMember(id) {
        return axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/member/${id}`)
    }
}

export default new MemberDataService();