export default {
  name: "id",
  title: "ID",
  type: "document",
  fields: [
    {
      name: "fullname",
      title: "Fullname",
      type: "string",
    },
    {
      name: "age",
      title: "Age",
      type: "number",
    },
    {
      name: "birthdate",
      title: "Birthdate",
      type: "date",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "gmail",
      title: "Gmail",
      type: "string",
    },
    {
      name: "jobtitle",
      title: "JobTitle",
      type: "string",
    },
    {
      name: "jobdescription",
      title: "JobDescription",
      type: "text",
    },
    {
      name: "github",
      title: "Github",
      type: "url",
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "url",
    },
    {
      name: "facebook",
      title: "Facebook",
      type: "url",
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
    },
    {
      name: "telegram",
      title: "Telegram",
      type: "url",
    },
  ],
};
