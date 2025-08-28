import { useState } from "react";
import upload_img from "../assets/upload_area.png";

const SellerAddProduct = () => {
  const [images, setImages] = useState(Array(4).fill(null)); // 4 slots

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedImages = [...images];
      updatedImages[index] = imageUrl;
      setImages(updatedImages);
    }
  };

  return (
    <div className="p-3">
      {/* Add Image Products */}
      <div>
        {/* Product Image Area */}
        <label>
          <p className="text-gray-700 dark:text-gray-200 font-medium">
            Product Image
          </p>
          <div className="flex gap-3 mt-2 items-center">
            {images.map((img, index) => (
              <label key={index} className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, index)}
                />
                <img
                  width="100px"
                  height="100px"
                  className="max-w-24 object-cover border border-gray-300 dark:border-gray-700 rounded"
                  src={img || upload_img}
                  alt="upload preview"
                />
              </label>
            ))}
          </div>
        </label>

        {/* Product Details */}
        <form className="mt-5">
          {/* Product Name */}
          <div className="mb-6">
            <label
              htmlFor="product-name"
              className="text-gray-700 dark:text-gray-200 font-medium block mb-2"
            >
              Product Name
            </label>
            <input
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 rounded-[2px] w-md h-12 p-3 outline-none focus:ring-1 focus:ring-primary"
              type="text"
              id="product-name"
              placeholder="Type here"
            />
          </div>

          {/* Product Description */}
          <div className="mb-6">
            <label
              htmlFor="product-description"
              className="text-gray-700 dark:text-gray-200 font-medium block mb-2"
            >
              Product Description
            </label>
            <textarea
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 rounded-[2px] w-md h-[120px] resize-none p-3 outline-none focus:ring-1 focus:ring-primary"
              id="product-description"
              placeholder="Type here"
            />
          </div>

          {/* Category, Price, Offer */}
          <div className="flex gap-8">
            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-gray-700 dark:text-gray-200 font-medium mb-1"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
                className="text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 outline-none p-2.5 w-[115px] rounded-[3px]"
              >
                <option value="">Laptop</option>
                <option value="">Mobile</option>
                <option value="">Television</option>
              </select>
            </div>

            {/* Product Price */}
            <div>
              <label
                htmlFor="product-price"
                className="block text-gray-700 dark:text-gray-200 font-medium mb-1"
              >
                Product Price
              </label>
              <input
                type="number"
                id="product-price"
                placeholder="0"
                className="text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 outline-none p-2.5 w-[115px] rounded-[3px]"
              />
            </div>

            {/* Offer Price */}
            <div>
              <label
                htmlFor="offer-price"
                className="block text-gray-700 dark:text-gray-200 font-medium mb-1"
              >
                Offer Price
              </label>
              <input
                type="number"
                id="offer-price"
                placeholder="0"
                className="text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 outline-none p-2.5 w-[115px] rounded-[3px]"
              />
            </div>
          </div>

          {/* Add Button */}
          <button
            type="submit"
            className="mt-4 bg-primary cursor-pointer p-2.5 px-9 rounded-[5px] text-white hover:bg-primary/90 transition-colors"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerAddProduct;
