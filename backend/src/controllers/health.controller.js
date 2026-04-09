import { checkHealth } from "../services/health.service.js";



// export the function so other files can import it
export const getHealth = (req, res) => {
  try {
    // call a service that checks health status or returns status data
    const data = checkHealth();

    // send a successful JSON response with status code 200
    res.status(200).json({
      message: "API is running",
      data,
    });
  } catch (error) {
    // if something goes wrong, send a 500 error response
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};