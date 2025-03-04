import api from "@/services/api";

export const fetchTournamentDataApi = async () => {
  const response = await api.get("/tournament/public");
  console.log("...............................");
  console.log(response.data);
  return response.data;
};
