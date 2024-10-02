// import the cloudinary library
import { v2 as cloudinary } from "cloudinary";

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

// Uploads an image file
export const uploadImageCDN = async (imagePath) => {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    folder: "SongManger/CoverImg",
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    const asset_id = result.result;
    const public_id = result.public_id;
    const signature = result.signature;
    const url = result.url;

    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url(public_id, {
      fetch_format: "auto",
      quality: "auto",
    });

    return {
      optimizeImgUrl: optimizeUrl,
      originImgUrl: url,
      imgpublic_id: public_id,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteImageCDN = async (imagePublicID) => {
  if (imagePublicID) {
    const options = {
      resource_type: "image",
    };

    try {
      const result = await cloudinary.uploader.destroy(imagePublicID, options);

      console.log("DeleteCDN Result:", result);

      if (result.result === "ok") {
        console.log(`Successfully deleted image with ID: ${imagePublicID}`);
      } else {
        console.error(`Failed to delete image: ${result.result}`);
      }
    } catch (err) {
      console.error("Error deleting image:", err);
      throw err;
    }
  } else {
    console.warn("No imagePublicID provided for deletion.");
  }
};

export const updaterImageCDN = async (imagePublicId, imagePath) => {
  try {
    const publicId = await extractPublicId(imagePublicId);

    console.log("URL: ", imagePublicId);
    console.log("PublicId: ", publicId);

    await deleteImageCDN(publicId);
    const result = await uploadImageCDN(imagePath);

    return {
      optimizeImgUrl: result.optimizeImgUrl,
      originImgUrl: result.originImgUrl,
      imgpublic_id: result.imgpublic_id,
    };
  } catch (error) {
    throw new Error("Cannot update image. Please try again.");
  }
};

export const extractPublicId = (cloudinaryUrl) => {
  const regex = /\/upload\/(?:[^\/]*\/)*(.*?)(?=\?|$)/;
  const match = cloudinaryUrl.match(regex);

  if (match && match[1]) {
    const publicId = "SongManger/CoverImg/" + match[1];
    return publicId;
  }

  return null;
};
