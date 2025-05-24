import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTliNjQ3YjA3NmU0YjQ0NmM4NmYwNzVjNWI3NTllNSIsIm5iZiI6MTc0MDA1MzYwMy41MTEwMDAyLCJzdWIiOiI2N2I3MWM2MzlmN2ZiMmE3NDM2NTcxZTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GcMihwk4xBegzcLRm_eWC15lfLZZl3L1cHh6CRA50vA',
  },
});

export default instance;
