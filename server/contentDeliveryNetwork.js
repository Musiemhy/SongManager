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
      await cloudinary.uploader
        .destroy(imagePublicID, options)
        .then((result) => {
          console.log("DeleteCDN:" + JSON.stringify(result));
          //
          // if (result === "not found") {
          //   const err = new Error("CDN Image not found");
          //   err.statuscode = 400;
          //   throw err;
          // }
          //
        });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};

export const updaterImageCDN = async (imagePublicId, imagePath) => {
  try {
    console.log(imagePublicId);
    await deleteImageCDN(imagePublicId);
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
