import withExportImages from "next-export-optimize-images";

/** @type {import('next').NextConfig} */
const nextConfig = withExportImages({
  output: "export",
});

export default nextConfig;
