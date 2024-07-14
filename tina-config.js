import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: process.env.TINA_CLIENT_ID,
  branch: "main", // or your default branch
  token: process.env.TINA_TOKEN, // Add this later if needed
  build: {
    outputFolder: "admin",
    publicFolder: "",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "",
    },
  },
  schema: {
    collections: [
      {
        label: "HTML Pages",
        name: "html",
        path: "",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
          },
        ],
      },
    ],
  },
});
