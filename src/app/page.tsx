import { Introduction } from "@/components/introduction";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BlogPost {
  title: string;
  href: string;
  tags: string[];
  date: string;
  description: string;
}

interface Project {
  title: string;
  href: string;
  description: string;
  date: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: "My philosophy on money; why I built ",
    href: "/content/writing/svb",
    tags: ["Digital"],
    date: "April 2023",
    description: "2min read",
},
  {
    title: "No couch, no TV",
    href: "/content/writing/space_around",
    tags: ["Interior Design"],
    date: "January 2023",
    description: "2min read",
  },
  

  // Add more blog posts here
];

const projects: Project[] = [
  {
    title: "Intentions",
    href: "https://www.intentions.tech",
    description: "Reflect on your values using your spending",
    date: "2024 Sep - Current ",
    tags: ["Digital"],
  },
  {
    title: "Palindrome",
    href: "https://www.notion.so/palindromeinc/Palindrome-7dc31b51b3c2433ba495c5061e301580",
    description: "Building a enthustiast car that's practical and fun",
    date: "2023 Nov - Current ",
    tags: ["Physical"],
  },
  // Add more projects here
];

const BlogPostItem = ({ post }: { post: BlogPost }) => (
  <Link href={post.href}>
    <li className="my-2 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 cursor-pointer">
      <div className="p-2">
        <h2 className="text-m font-semibold text-muted-foreground group-hover:text-black dark:group-hover:text-white">
          {post.title === "My philosophy on money; why I built " ? (
            <>
              {post.title}<s>SavebyValues</s> Intentions
            </>
          ) : (
            post.title
          )}
        </h2>
        <p className="text-sm text-muted-foreground">{post.description}</p>
        <div className="flex flex-wrap gap-2 mt-2 sm:hidden">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-sm p-2 bg-purple-100 dark:bg-purple-900">
              {tag}
            </Badge>
          ))}
          <Badge variant="secondary" className="rounded-sm p-2">
            {post.date}
          </Badge>
        </div>
      </div>
      <div className="hidden sm:flex sm:p-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="ml-2 rounded-sm p-2 bg-purple-100 dark:bg-purple-900">
            {tag}
          </Badge>
        ))}
        <Badge variant="secondary" className="ml-2 rounded-sm p-2">
          {post.date}
        </Badge>
      </div>
    </li>
  </Link>
);

const ProjectItem = ({ project }: { project: Project }) => (
  <li className="my-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200">
    <Link href={project.href} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2">
      <div>
        <h3 className="text-m font-semibold text-muted-foreground group-hover:text-black dark:group-hover:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2 sm:mb-0">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2 sm:hidden">
          {project.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className={`rounded-sm p-2 ${
                tag === "Physical" ? "bg-green-100 dark:bg-green-900" : "bg-blue-100 dark:bg-blue-900"
              }`}
            >
              {tag}
            </Badge>
          ))}
          <Badge variant="secondary" className="rounded-sm p-2">
            {project.date}
          </Badge>
        </div>
      </div>
      <div className="hidden sm:flex">
        {project.tags.map((tag) => (
          <Badge 
            key={tag} 
            variant="secondary" 
            className={`ml-2 rounded-sm p-2 ${
              tag === "Physical" ? "bg-green-100 dark:bg-green-900" : "bg-blue-100 dark:bg-blue-900"
            }`}
          >
            {tag}
          </Badge>
        ))}
        <Badge variant="secondary" className="ml-2 rounded-sm p-2">
          {project.date}
        </Badge>
      </div>
    </Link>
  </li>
);

export default function Home() {
  return (
    <>
      <div>
        <Introduction/>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold p-2">Projects</h2>
        <Separator/>
        <div>
          <ul className="w-full list-none pl-0 mt-4">
            {projects.map((project, index) => (
              <>
                <ProjectItem key={project.href} project={project} />
                {index < projects.length - 1 && <Separator />}
              </>
            ))}
          </ul>
        </div>
        <h2 className="text-xl font-semibold p-2">Writing</h2>
        <Separator/>
        <div>
          <ul className="w-full list-none pl-0 mt-4">
            {blogPosts.map((post, index) => (
              <>
                <BlogPostItem key={post.href} post={post} />
                {index < blogPosts.length - 1 && <Separator />}
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}