export const config = {
  runtime: "nodejs",
};

export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://www.carqueryapi.com/api/0.3/?cmd=getTrims&format=json",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`CarQuery failed: ${response.status}`);
    }

    const data = await response.json();

    // CarQuery response normalization
    const trimsContainer = data.trims || data.Trims;
    const trims = Array.isArray(trimsContainer)
      ? trimsContainer
      : trimsContainer?.list;

    if (!Array.isArray(trims)) {
      console.error("Unexpected CarQuery payload:", data);
      return res.status(500).json({
        error: "Invalid CarQuery response shape",
        raw: data,
      });
    }

    res.status(200).json({ trims });
  } catch (err) {
    console.error("Car data fetch failed:", err);
    res.status(500).json({ error: err.message });
  }
}