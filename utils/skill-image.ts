import html from "../app/assets/svg/skills/html.svg";
import css from "../app/assets/svg/skills/css.svg";
import tailwind from "../app/assets/svg/skills/tailwind.svg";
import javascript from "../app/assets/svg/skills/javascript.svg";
import typescript from "../app/assets/svg/skills/typescript.svg";
import react from "../app/assets/svg/skills/react.svg";
import nextJS from "../app/assets/svg/skills/nextJS.svg";
import firebase from "../app/assets/svg/skills/firebase.svg";
import git from "../app/assets/svg/skills/git.svg";
import graphql from "../app/assets/svg/skills/graphql.svg";

export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "tailwind":
      return tailwind;
    case "javascript":
      return javascript;
    case "typescript":
      return typescript;
    case "react":
      return react;
    case "next js":
    case "nextjs":
      return nextJS;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "graphql":
      return graphql;
    default:
      return null;
  }
};
