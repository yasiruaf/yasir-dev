import { PERSONAL_DATA } from "@/utils/data/personalData";
import React from "react";

export const CodeBlock = () => {
  const skills = ["React", "NextJS", "Hydrogen", "Shopify", "Sanity CMS"];

  return (
    <code className="font-mono text-xs md:text-sm lg:text-base space-y-1">
      <div className="blink">
        <span className="mr-2 text-pink-500">const</span>
        <span className="mr-2 text-white">coder</span>
        <span className="mr-2 text-pink-500">=</span>
        <span className="text-gray-400">{"{"}</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
        <span className="text-gray-400">{`'`}</span>
        <span className="text-amber-300">{PERSONAL_DATA.name}</span>
        <span className="text-gray-400">{`',`}</span>
      </div>
      <div className="ml-4 lg:ml-8 mr-2">
        <span className="text-white">skills:</span>
        <span className="text-gray-400">{`[`}</span>
        {skills.map((skill, index) => (
          <React.Fragment key={skill}>
            <span className="text-amber-300">{`'${skill}'`}</span>
            {index < skills.length - 1 && (
              <span className="text-gray-400">{", "}</span>
            )}
          </React.Fragment>
        ))}
        <span className="text-gray-400">{`],`}</span>
      </div>
      {["hardWorker", "quickLearner", "problemSolver"].map((trait) => (
        <div key={trait}>
          <span className="ml-4 lg:ml-8 mr-2 text-white">{trait}:</span>
          <span className="text-orange-400">true</span>
          <span className="text-gray-400">,</span>
        </div>
      ))}
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
        <span className="text-orange-400">function</span>
        <span className="text-gray-400">{"() => {"}</span>
      </div>
      <div>
        <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
        <span className="text-gray-400">{`(`}</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">hardWorker</span>
        <span className="text-amber-300">&amp;&amp;</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">problemSolver</span>
        <span className="text-amber-300">&amp;&amp;</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">skills.length</span>
        <span className="mr-2 text-amber-300">&gt;=</span>
        <span className="text-orange-400">5</span>
      </div>
      <div>
        <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
      </div>
      <div>
        <span className="text-gray-400">{`};`}</span>
      </div>
    </code>
  );
};
