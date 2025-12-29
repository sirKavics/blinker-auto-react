import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "http://www.carqueryapi.com/api/0.3/",
      {
        params: {
          cmd: "getTrims",
          format: "json",
        },
      }
    );

    const data = response.data;

    // Normalize casing inconsistency
    const trims = data.trims || data.Trims;

    if (!Array.isArray(trims)) {
      console.error("Unexpected CarQuery response:", data);
      return res.status(500).json({
        error: "Invalid CarQuery response shape",
      });
    }

    res.status(200).json({ trims });
  } catch (error) {
    console.error("CarQuery fetch failed:", error.message);
    res.status(500).json({
      error: "Failed to fetch cars from CarQuery",
    });
  }
}