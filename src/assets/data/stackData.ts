import ScreenIcon from "@icons/general/ScreenIcon.astro";
import ServerIcon from "@icons/general/ServerIcon.astro";
import DatabaseIcon from "@icons/general/DatabaseIcon.astro";
import CloudIcon from "@icons/general/CloudIcon.astro";
import ShieldIcon from "@icons/general/ShieldIcon.astro";
import ToolIcon from "@icons/general/ToolIcon.astro";

import HTMLLogo from "@logos/frontend/HTMLLogo.astro";
import CSSLogo from "@logos/frontend/CSSLogo.astro";
import TailwindCSSLogo from "@logos/frontend/TailwindCSSLogo.astro";
import JavaScriptLogo from "@logos/frontend/JavaScriptLogo.astro";
//import TypeScriptLogo from "@logos/frontend/TypeScriptLogo.astro";
import ReactLogo from "@logos/frontend/ReactLogo.astro";

import PHPLogo from "@logos/backend/PHPLogo.astro";
import LaravelLogo from "@logos/backend/LaravelLogo.astro";
import NodeLogo from "@logos/backend/NodeLogo.astro";
import ExpressLogo from "@logos/backend/ExpressLogo.astro";
import JavaLogo from "@logos/backend/JavaLogo.astro";
import SpringBootLogo from "@logos/backend/SpringBootLogo.astro";

import MySQLLogo from "@logos/database/MySQLLogo.astro";
import PostgreSQLLogo from "@logos/database/PostgreSQLLogo.astro";
import SQLiteLogo from "@logos/database/SQLiteLogo.astro";
import PrismaLogo from "@logos/database/PrismaLogo.astro";

import VercelLogo from "@logos/cloud/VercelLogo.astro";
import RailwayLogo from "@logos/cloud/RailwayLogo.astro";
//import DockerLogo from "@logos/cloud/DockerLogo.astro";

import JestLogo from "@logos/security/JestLogo.astro";
import SupertestLogo from "@logos/security/SupertestLogo.astro";
import JWTLogo from "@logos/security/JWTLogo.astro";
import Auth0Logo from "@logos/security/Auth0Logo.astro";

import GitLogo from "@logos/tools/GitLogo.astro";
import GitHubLogo from "@logos/tools/GitHubLogo.astro";
import VSCodeLogo from "@logos/tools/VSCodeLogo.astro";
import WebStormLogo from "@logos/tools/WebStormLogo.astro";
import PostmanLogo from "@logos/tools/PostmanLogo.astro";
import SwaggerLogo from "@logos/tools/SwaggerLogo.astro";

const stackData = [
  {
    title: "Frontend Development",
    icon: ScreenIcon,
    stack: [
      { name: "HTML", logo: HTMLLogo },
      { name: "CSS", logo: CSSLogo },
      { name: "Tailwind CSS", logo: TailwindCSSLogo },
      { name: "JavaScript", logo: JavaScriptLogo },
      //{ name: "TypeScript", logo: TypeScriptLogo },
      { name: "React", logo: ReactLogo },
    ],
  },
  {
    title: "Backend Development",
    icon: ServerIcon,
    stack: [
      { name: "PHP", logo: PHPLogo },
      { name: "Laravel", logo: LaravelLogo },
      { name: "Node.js", logo: NodeLogo },
      { name: "Express.js", logo: ExpressLogo },
      { name: "Java", logo: JavaLogo },
      { name: "Spring Boot", logo: SpringBootLogo },
    ],
  },
  {
    title: "Database Management",
    icon: DatabaseIcon,
    stack: [
      { name: "MySQL", logo: MySQLLogo },
      { name: "PostgreSQL", logo: PostgreSQLLogo },
      { name: "SQLite", logo: SQLiteLogo },
      { name: "Prisma", logo: PrismaLogo },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: CloudIcon,
    stack: [
      { name: "Vercel", logo: VercelLogo },
      { name: "Railway", logo: RailwayLogo },
      //{ name: "Docker", logo: DockerLogo },
    ],
  },
  {
    title: "Testing & Security",
    icon: ShieldIcon,
    stack: [
      { name: "Jest", logo: JestLogo },
      { name: "Supertest", logo: SupertestLogo },
      { name: "JWT", logo: JWTLogo },
      { name: "Auth0", logo: Auth0Logo },
    ],
  },
  {
    title: "Development Tools",
    icon: ToolIcon,
    stack: [
      { name: "Git", logo: GitLogo },
      { name: "GitHub", logo: GitHubLogo },
      { name: "VSCode", logo: VSCodeLogo },
      { name: "WebStorm", logo: WebStormLogo },
      { name: "Postman", logo: PostmanLogo },
      { name: "Swagger", logo: SwaggerLogo },
    ],
  },
];

export default stackData;
