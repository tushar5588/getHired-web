import axios from "axios";
export const getJobs = async (req, res) => {
  const data = await axios.get(`${process.env.API_BASE_URL}/web/web_get_jobs`);
};
