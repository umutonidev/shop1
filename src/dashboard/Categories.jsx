// src/dashboard/Categories.jsx
import React, { useState } from 'react';
import '../dashboard/dashstyle/Categories.css';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import edit and delete icons
import watch from"../assets/watch.jpg"


function Categories() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Smart Watch', imageUrl: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg" }, // Replace with actual URLs
    { id: 2, name: 'Smart Phone', imageUrl: 'https://i.ytimg.com/vi/cJKQdzopuco/maxresdefault.jpg' },
    { id: 3, name: 'Laptop', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23hVJDRwORZETPdBEX3aXkWXKwAW2wmWDlg&s' },
    { id: 4, name: 'Desktop', imageUrl: 'data:image/jpeg;base64,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' },
    { id: 5, name: 'Smart Tv', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmP9ZRCLg8pD79LQZUZ0Low5Um3Zd7gQXo1g&s' },
    { id: 6, name: 'Speakers', imageUrl: 'https://m.media-amazon.com/images/I/81FzSswwCVL.jpg' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(null); // State to track the selected category for editing
  const [newImage, setNewImage] = useState(null);

  const handleEdit = (category) => {
    setSelectedCategory(category);
  };

  const handleDelete = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  const handleImageChange = (event) => {
    // Handle the image selection here, e.g., store the selected file in state.
    const file = event.target.files[0];
    setNewImage(file);
  };

  const handleSave = () => {
    // Here you would implement the logic to update the category with the new image.
    // For now, we'll just close the modal:
    setSelectedCategory(null);
    setNewImage(null);
    alert('Image saved');
  };

  const handleClose = () => {
    setSelectedCategory(null);
    setNewImage(null);
  };

  return (
    <div className="categories-container">
      <h1>All Categories</h1>
      <div className="categories-grid">
        {categories.map(category => (
          <div className="category-card" key={category.id}>
            <h3>Name: {category.name}</h3>
            <img src={category.imageUrl} alt={category.name} />
            <div className="category-actions">
              <button className="edit-button" onClick={() => handleEdit(category)}>
                <FaEdit /> Edit
              </button>
              <button className="delete-button" onClick={() => handleDelete(category.id)}>
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="image-editor-overlay">
          <div className="image-editor-modal">
            <h2>{selectedCategory.name}</h2>
            <p>Existing Image:</p>
            <img src={selectedCategory.imageUrl} alt={selectedCategory.name} style={{ maxWidth: '150px' }} />
            <label htmlFor="imageUpload">Choose File:</label>
            <input type="file" id="imageUpload" onChange={handleImageChange} />
            <div className="modal-actions">
              <button className="save-button" onClick={handleSave}>Save</button>
              <button className="close-button" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;