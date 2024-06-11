import { getImages } from "@/libs/getImages";
import Picture from "next-export-optimize-images/picture";

interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Page = async () => {
  const images: ImageData[] = await getImages();

  return (
    <main className="flex flex-col gap-y-4 p-6">
      <h1 className="text-2xl font-bold">画像最適化のテスト</h1>
      {images.map((image, index) => (
        <Picture
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      ))}
    </main>
  );
};

export default Page;
