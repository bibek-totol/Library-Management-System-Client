export const deleteItem = async  (id:number, url: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/${url}/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Delete error:", error);
      throw error;
    }
  };
  