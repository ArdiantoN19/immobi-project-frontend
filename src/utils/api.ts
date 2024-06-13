const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const api = (() => ({
  async getKaryawan() {
    try {
      const response = await fetch(`${BASE_URL}/karyawans`);
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      console.log("error", error);
    }
  },

  async deleteKaryawan(id: number) {
    try {
      const response = await fetch(`${BASE_URL}/karyawans/${id}`, {
        method: "DELETE",
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log("error", error);
    }
  },
}))();

export default api;
