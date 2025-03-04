import api from "@/services/api";

export const fetchTournamentDataApi = async () => {
  const response = await api.get("/tournament/public");
  return response.data.data as TornamentState[];
};
