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

  async getDepartments() {
    try {
      const response = await fetch(`${BASE_URL}/departments`);
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      console.log("error", error);
    }
  },

  async getJabatans() {
    try {
      const response = await fetch(`${BASE_URL}/jabatans`);
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      console.log("error", error);
    }
  },

  async createKaryawan(payload: any) {
    try {
      const response = await fetch(`${BASE_URL}/karyawans`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const responseJson = await response.json();

      return responseJson;
    } catch (error) {
      console.log("error");
    }
  },

  async createDepartment(payload: any) {
    try {
      const response = await fetch(`${BASE_URL}/departments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log("error");
    }
  },
}))();

export default api;
