export const checkHealth = () => {
  return {
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date(),
  };
};