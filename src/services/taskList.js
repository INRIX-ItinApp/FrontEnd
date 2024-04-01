import axios from "axios";

class TaskDataService  {

  getAll(page = 0) {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/tasks?page=${page}`);
  }

  getRecommendations(id){
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/tasks/id/${id}`);
  }

  createTask(data) {
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/tasks`, data);
  }
  updateTaskList(data){
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/v1/tasks`, data);
  }

  
}

export default new TaskDataService();