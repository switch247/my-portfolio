import { BiLogoReact } from 'react-icons/bi';
import { DiJavascript1, DiNodejs, DiMongodb } from 'react-icons/di';
import { SiNextdotjs, SiExpress, SiPuppeteer, SiPrisma } from 'react-icons/si';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BsGit } from 'react-icons/bs';
import { TbBrandCss3 } from 'react-icons/tb';
import { BiLogoFlask } from 'react-icons/bi';
import { FaDocker } from 'react-icons/fa';
import { SiGoland } from 'react-icons/si';
import { SiNestjs } from 'react-icons/si';
import { SiTauri } from 'react-icons/si';
import { SiSocketdotio } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiRedis } from 'react-icons/si';
import { SiSqlite } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';
import { SiSupabase } from 'react-icons/si';


import styles from '@/styles/tech.module.css';
const Tech = () => {
  return (
    <div className={styles.tech}>
      <h2>
        <b className={styles.purple}>Tech</b> I use
      </h2>

      <div className={styles.techIcons}>
        <div role="img" aria-label="JavaScript">
          <i>
            <DiJavascript1 />
          </i>
        </div>

        <div role="img" aria-label="React.js">
          <i>
            <BiLogoReact />
          </i>
        </div>

        <div role="img" aria-label="Node.js">
          <i>
            <DiNodejs />
          </i>
        </div>
        <div role="img" aria-label="Express.js">
          <i>
            <SiExpress />
          </i>
        </div>
        <div role="img" aria-label="MongoDB">
          <i>
            <DiMongodb />
          </i>
        </div>

        <div role="img" aria-label="Next.js">
          <i>
            <SiNextdotjs />
          </i>
        </div>
        <div role="img" aria-label="HTML5">
          <i>
            <AiOutlineHtml5 />
          </i>
        </div>

        <div role="img" aria-label="CSS3">
          <i>
            <TbBrandCss3 />
          </i>
        </div>
        <div role="img" aria-label="Git">
          <i>
            <BsGit />
          </i>
        </div>
        <div role="img" aria-label="flask">
          <i>
            <BiLogoFlask />
          </i>
        </div>
        <div role="img" aria-label="prisma">
          <i>
            <SiPrisma />
          </i>
        </div>

        {/* <div role="img" aria-label="Puppeteer">
          <i>
            <SiPuppeteer />
          </i>
        </div> */}
        <div role="img" aria-label="Docker">
          <i>
            <FaDocker />
          </i>
        </div>

        <div role="img" aria-label="Goland">
          <i>
            <SiGoland />
          </i>
        </div>

        <div role="img" aria-label="Nest.js">
          <i>
            <SiNestjs />
          </i>
        </div>
        <div role="img" aria-label="Tauri">
          <i>
            <SiTauri />
          </i>
        </div>
        <div role="img" aria-label="Socket.io">
          <i>
            <SiSocketdotio />
          </i>
        </div>
        <div role="img" aria-label="Firebase">
          <i>
            <SiFirebase />
          </i>
        </div>
        <div role="img" aria-label="Graphql">
          <i>
            <SiGraphql />
          </i>
        </div>
        <div role="img" aria-label="Postgresql">
          <i>
            <SiPostgresql />
          </i>
        </div>
        <div role="img" aria-label="Mysql">
          <i>
            <SiMysql />
          </i>
        </div>
        <div role="img" aria-label="Redis">
          <i>
            <SiRedis />
          </i>
        </div>

        <div role="img" aria-label="Sqlite">
          <i>
            <SiSqlite />
          </i>
        </div>
        <div role="img" aria-label="Postman">
          <i>
            <SiPostman />
          </i>
        </div>

        <div role="img" aria-label="Supabase">
          <i>
            <SiSupabase />
          </i>

        </div>







      </div>
    </div>
  );
};

export default Tech;
