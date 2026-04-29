import { useState,useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Addproducts = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");
  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ✅ Check if user is logged in
  useEffect(() => {
    const user = localStorage.getItem("user"); // or `token`
    if (!user) {
      navigate("/signin");
    }
  }, [navigate]);

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we upload your data!");

    try {
      const data = new FormData();
      data.append("product_name", product_name);
      data.append("product_description", product_description);
      data.append("product_cost", product_cost);
      data.append("product_photo", product_photo);

      // ✅ Include token in headers if needed
      const token = JSON.parse(localStorage.getItem("user"))?.token;

      const response = await axios.post(
        "https://joemwangi.pythonanywhere.com/api/add_product",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLoading("");
      setMessage("Product added successfully");
    } catch (error) {
      setLoading("");
      setError(error.Message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 card shadow p-4">
          {loading}
          {message}
          {error}
          <form onSubmit={submit}>
            <h1>Upload Products</h1>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="form-control"
              onChange={(e) => setProductName(e.target.value)}
              value={product_name}
              required
            />
            <br />
            <textarea
              className="form-control"
              placeholder="Describe Product"
              onChange={(e) => setProductDescription(e.target.value)}
              value={product_description}
              required
            ></textarea>
            <br />
            <input
              type="number"
              placeholder="Enter Product Cost"
              className="form-control"
              onChange={(e) => setProductCost(e.target.value)}
              value={product_cost}
              required
            />
            <br />
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setProductPhoto(e.target.files[0])}
              required
            />
            <br />
            <button className="btn btn-primary" type="submit">
              Upload Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addproducts;
