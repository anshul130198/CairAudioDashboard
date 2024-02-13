import React, { useState } from "react";

const FileUploader = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = () => {
    // Add your file upload logic here
    console.log("Uploading file:", selectedFile);
    // Reset the selected file after uploading
    setSelectedFile(null);
    onUpload(true);
  };

  const handleReset = () => {
    // Reset the selected file
    setSelectedFile(null);
  };

  const renderPreview = () => {
    if (!selectedFile) {
      return null;
    }

    const { type } = selectedFile;
    console.log(selectedFile);
    if (type.startsWith("image/")) {
      return (
        <div>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="File Preview"
            style={{
              maxWidth: "100%",
              maxHeight: "100px",
              display: "block",
              margin: "10px 0",
            }}
          />
          <p>{selectedFile.name}</p>
        </div>
      );
    } else {
      return (
        <>
          <diV
            style={{
              width: "100px",
              height: "100px",
              background: "lightgrey",
              borderRadius: "5px",
            }}
          ></diV>
          <p>{selectedFile?.name}</p>
        </>
      );
    }
  };

  return (
    <div className="drag-drop">
      {/* <h4>Upload file</h4> */}
      <label
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        htmlFor="fileInput"
      >
        <i className="fas fa-upload" />
        <p>Drag & Drop</p>
        <input
          id="fileInput"
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </label>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {renderPreview()}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleUpload} disabled={!selectedFile}>
          Upload
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default FileUploader;
