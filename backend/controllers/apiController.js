import axios from "axios";


export const launchController = async (req, res) => {
  try {
    const { launch_success, land_success, launch_year } = req.query;

    console.log(launch_success, land_success, launch_year);

    let url = "https://api.spacexdata.com/v3/launches?limit=100";

    if (launch_success.length  > 0) {
      url += `&launch_success=${launch_success}`;
    }

    if (land_success.length > 0) {
      url += `&land_success=${land_success}`;
    }

    if (launch_year.length > 0) {
      url += `&launch_year=${launch_year}`;
    }

    console.log("url: ", url);

    try {
      const launchData = await axios.get(url);

      console.log(launchData.data)

      return res.status(200).json({
        success: true,
        launchData: launchData.data,
      });

    } catch (error) {
      console.error("Error fetching data: ", error);
      res.status(500).json({ error: "An error occurred while fetching data" });
    }
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
