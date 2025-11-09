import { PERSONAL_DATA } from "@/utils/data/personalData";
import React from "react";

export const CodeBlock = () => {
  const skills = [
    "React",
    "NextJS",
    "Hydrogen",
    "Shopify",
    "Sanity CMS",
    "NodeJS",
    "Express",
  ];

  return (
    <div className="vscode-editor rounded-lg overflow-hidden shadow-2xl border border-[#1e1e1e]">
      {/* VS Code Title Bar */}
      <div className="bg-[#323233] px-4 py-2.5 flex items-center justify-between border-b border-[#1e1e1e]">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#ff5f57] rounded-full"></div>
          <div className="w-3 h-3 bg-[#febc2e] rounded-full"></div>
          <div className="w-3 h-3 bg-[#28c840] rounded-full"></div>
        </div>
        <div className="text-[13px] text-[#cccccc] font-medium">Developer.ts</div>
      </div>

      {/* VS Code Editor Content */}
      <div className="bg-[#1e1e1e] p-4 overflow-x-auto">
        <code className="font-mono text-[13px] md:text-[14px] block leading-[1.6] tracking-normal">
          <div className="flex">
            {/* Line Numbers */}
            <div className="text-[#858585] pr-6 select-none text-right min-w-[40px] whitespace-pre">
              <div className="leading-[1.6]">1</div>
              <div className="leading-[1.6]">2</div>
              <div className="leading-[1.6]">3</div>
              <div className="leading-[1.6]">4</div>
              <div className="leading-[1.6]">5</div>
              <div className="leading-[1.6]">6</div>
              <div className="leading-[1.6]">7</div>
              <div className="leading-[1.6]">8</div>
              <div className="leading-[1.6]">9</div>
              <div className="leading-[1.6]">10</div>
              <div className="leading-[1.6]">11</div>
              <div className="leading-[1.6]">12</div>
              <div className="leading-[1.6]">13</div>
              <div className="leading-[1.6]">14</div>
              <div className="leading-[1.6]">15</div>
              <div className="leading-[1.6]">16</div>
              <div className="leading-[1.6]">17</div>
            </div>

            {/* Code Content */}
            <div className="flex-1 whitespace-pre-wrap break-words min-w-0">
              {/* Line 1: class Developer { */}
              <div className="leading-[1.6]">
                <span className="text-[#569cd6]">class</span>
                <span className="text-[#d4d4d4]"> </span>
                <span className="text-[#4ec9b0]">Developer</span>
                <span className="text-[#d4d4d4]"> {"{"}</span>
              </div>

              {/* Line 2: constructor */}
              <div className="leading-[1.6]">
                <span className="text-[#d4d4d4]">  </span>
                <span className="text-[#dcdcaa]">constructor</span>
                <span className="text-[#d4d4d4]">(</span>
                <span className="text-[#9cdcfe]">name</span>
                <span className="text-[#d4d4d4]">, </span>
                <span className="text-[#9cdcfe]">skills</span>
                <span className="text-[#d4d4d4]">) {"{"}</span>
              </div>

              {/* Line 3: this.name = name; */}
              <div className="leading-[1.6]">
                <span className="text-[#d4d4d4]">    </span>
                <span className="text-[#569cd6]">this</span>
                <span className="text-[#d4d4d4]">.</span>
                <span className="text-[#9cdcfe]">name</span>
                <span className="text-[#d4d4d4]"> </span>
                <span className="text-[#d4d4d4]">=</span>
                <span className="text-[#d4d4d4]"> name;</span>
              </div>

              {/* Line 4: this.skills = skills; */}
              <div className="leading-[1.6]">
                <span className="text-[#d4d4d4]">    </span>
                <span className="text-[#569cd6]">this</span>
                <span className="text-[#d4d4d4]">.</span>
                <span className="text-[#9cdcfe]">skills</span>
                <span className="text-[#d4d4d4]"> = skills;</span>
              </div>

              {/* Line 5: this.traits = [...]; */}
              <div className="leading-[1.6]">
                <span className="text-[#d4d4d4]">    </span>
                <span className="text-[#569cd6]">this</span>
                <span className="text-[#d4d4d4]">.</span>
                <span className="text-[#9cdcfe]">traits</span>
                <span className="text-[#d4d4d4]"> = [</span>
                <span className="text-[#ce9178]">&apos;hardWorker&apos;</span>
                <span className="text-[#d4d4d4]">, </span>
                <span className="text-[#ce9178]">&apos;quickLearner&apos;</span>
                <span className="text-[#d4d4d4]">, </span>
                <span className="text-[#ce9178]">&apos;problemSolver&apos;</span>
                <span className="text-[#d4d4d4]">];</span>
              </div>

              {/* Line 6: } */}
              <div className="leading-[1.6]">
                <span className="text-[#d4d4d4]">  {"}"}</span>
              </div>

              {/* Line 7: empty line */}
              <div className="leading-[1.6]">&nbsp;</div>

              {/* Line 8: isHireable() { */}
              <div className="leading-[1.6]">
                <span className="text-[#d4d4d4]">  </span>
                <span className="text-[#dcdcaa]">isHireable</span>
                <span className="text-[#d4d4d4]">() {"{"}</span>
              </div>

              {/* Line 9: return this.traits.includes('hardWorker') && */}
              <div className="leading-[1.6]">
                <span className="text-[#d4d4d4]">    </span>
                <span className="text-[#c586c0]">return</span>
                <span className="text-[#d4d4d4]"> </span>
                <span className="text-[#569cd6]">this</span>
                <span className="text-[#d4d4d4]">.</span>
                <span className="text-[#9cdcfe]">traits</span>
                <span className="text-[#d4d4d4]">.</span>
                <span className="text-[#dcdcaa]">includes</span>
                <span className="text-[#d4d4d4]">(</span>
                <span className="text-[#ce9178]">&apos;hardWorker&apos;</span>
                <span className="text-[#d4d4d4]">) &amp;&amp;</span>
              </div>

              {/* Line 10: this.skills.length >= 5; */}
              <div className="leading-[1.6]">
                <span className="text-[#d4d4d4]">           </span>
                <span className="text-[#569cd6]">this</span>
                <span className="text-[#d4d4d4]">.</span>
                <span className="text-[#9cdcfe]">skills</span>
                <span className="text-[#d4d4d4]">.</span>
                <span className="text-[#9cdcfe]">length</span>
                <span className="text-[#d4d4d4]"> &gt;= </span>
                <span className="text-[#b5cea8]">5</span>
                <span className="text-[#d4d4d4]">;</span>
              </div>

              {/* Line 11: } */}
              <div className="leading-[1.6]">
                <span className="text-[#d4d4d4]">  {"}"}</span>
              </div>

              {/* Line 12: } */}
              <div className="leading-[1.6]">
                <span className="text-[#d4d4d4]">{"}"}</span>
              </div>

              {/* Line 13: empty line */}
              <div className="leading-[1.6]">&nbsp;</div>

              {/* Line 14: const dev = new Developer(...); */}
              <div className="leading-[1.6]">
                <span className="text-[#569cd6]">const</span>
                <span className="text-[#d4d4d4]"> </span>
                <span className="text-[#4fc1ff]">dev</span>
                <span className="text-[#d4d4d4]"> = </span>
                <span className="text-[#569cd6]">new</span>
                <span className="text-[#d4d4d4]"> </span>
                <span className="text-[#4ec9b0]">Developer</span>
                <span className="text-[#d4d4d4]">(</span>
                <span className="text-[#ce9178]">&apos;{PERSONAL_DATA.name}&apos;</span>
                <span className="text-[#d4d4d4]">, [</span>
                {skills.map((skill, index) => (
                  <React.Fragment key={skill}>
                    <span className="text-[#ce9178]">&apos;{skill}&apos;</span>
                    {index < skills.length - 1 && (
                      <span className="text-[#d4d4d4]">, </span>
                    )}
                  </React.Fragment>
                ))}
                <span className="text-[#d4d4d4]">]);</span>
              </div>

              {/* Line 15: dev.isHireable(); // true */}
              <div className="leading-[1.6]">
                <span className="text-[#4fc1ff]">dev</span>
                <span className="text-[#d4d4d4]">.</span>
                <span className="text-[#dcdcaa]">isHireable</span>
                <span className="text-[#d4d4d4]">(); </span>
                <span className="text-[#6a9955]">{'// true'}</span>
              </div>
            </div>
          </div>
        </code>
      </div>
    </div>
  );
};
