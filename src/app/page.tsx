import { Introduction } from "@/components/introduction";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <>
      <div>
        <Introduction/>
      </div>
      <Tabs defaultValue="writing" className="w-full mt-10">
        <TabsList>
          <TabsTrigger value="writing">Writing</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="writing">  
          <div>
            <ul className="w-full list-none pl-0 mt-8">
              <li className="my-2 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200">
                <Link href="/content/writing/space_around" className="flex-grow p-2">
                  <h2 className="text-m font-semibold text-muted-foreground group-hover:text-black dark:group-hover:text-white">No couch, no TV</h2>
                </Link>
                <div className="p-2">
                  <Badge variant="secondary" className="ml-2">
                    Interior Design
                  </Badge>
                  <Badge variant="secondary" className="ml-2">
                    March-2023
                  </Badge>
                </div>

              </li>
              <Separator/>
              <li className="my-2 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200">
                <Link href="/content/writing/space_around" className="flex-grow p-2">
                  <h2 className="text-m font-semibold text-muted-foreground group-hover:text-black dark:group-hover:text-white">No couch, no TV</h2>
                </Link>
                <div className="p-2">
                  <Badge variant="secondary" className="ml-2">
                    Interior Design
                  </Badge>
                  <Badge variant="secondary" className="ml-2">
                    March-2023
                  </Badge>
                </div>
                {/* Add more content for Blog Post One */}
                
              </li>
              
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}