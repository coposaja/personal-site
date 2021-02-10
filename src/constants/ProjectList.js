import {
  bidukImg,
  bimayImg,
  binusImg,
  bsqImg,
  dollaImg,
  iaiImg,
  kajImg,
  santoleoImg,
} from '../assets/images';
import * as bimayImages from '../assets/images/projects/bimay';
import * as bsqImages from '../assets/images/projects/bsq';
import * as dollaImages from '../assets/images/projects/dolla';
import * as micrositeImages from '../assets/images/projects/microsite';
import * as bidukImages from '../assets/images/projects/biduk';
import * as iaiImages from '../assets/images/projects/iai';
import * as pelayananImages from '../assets/images/projects/pelayanan';
import * as santoleoImages from '../assets/images/projects/santoleo';

export const projectList = [
  {
    title: "BIDUK",
    techs: "ASP.NET | N-Tier Framework | SQL Server",
    backgroundUrl: bidukImg,
    imageUrls: Object.values({ ...bidukImages }),
    years: [2017, 2018, 2019],
    description: "A website that maintains Catholics data especially those whom belong to some diocese that has been decided to use this app."
  },
  {
    title: "IAI Membership",
    techs: "ASP.NET | MVC Framework | SQL Server",
    backgroundUrl: iaiImg,
    imageUrls: Object.values({ ...iaiImages }),
    years: [2017],
    description: "Information System that maintain membership of IAI (Ikatan Akuntan Indonesia) for Admin perspective and Member perspective."
  },
  {
    title: "KAJ Pelayanan",
    techs: "ASP.NET | MVC Framework | REST API | SQL Server",
    backgroundUrl: kajImg,
    imageUrls: Object.values({ ...pelayananImages }),
    years: [2018, 2019],
    description: "Computerized administrations for four of seven sacraments of the Catholic Chruch (Baptism, First Communion, Confirmation, Matrimony). Which handle the administration from registration phase until the minting of sacrament certificate. Also integrating with BIDUK KAJ through Web Service."
  },
  {
    title: "Binus Square Boarder Portal",
    techs: "ASP.NET | REST API | Single Page Application | SQL Server",
    backgroundUrl: bsqImg,
    imageUrls: Object.values({ ...bsqImages }),
    years: [2019],
    description: "Portal for boarder of Binus Square (Bina Nusantara Univeristy dormitory) for information checking and submitting some administration forms."
  },
  {
    title: "Santo Leo Payroll",
    techs: ".NET Core | PostgreSQL",
    backgroundUrl: santoleoImg,
    imageUrls: Object.values({ ...santoleoImages }),
    years: [2019],
    description: "Web application that is used by Santo Leo institution for managing their employees payroll and job transition at the schools under their institution."
  },
  {
    title: "Exam | Thesis | MyClass Microsites",
    techs: "ASP.NET | REST API",
    backgroundUrl: binusImg,
    imageUrls: Object.values({ ...micrositeImages }),
    years: [2020],
    description: "These microsites are the result of mitigating problems arising from the pandemic outbreak used for Online Exam, Softcover submission, and Lecture Schedule Online Class link checking"
  },
  {
    title: "dolla Landing Page",
    techs: "React | Styled Components",
    backgroundUrl: dollaImg,
    imageUrls: Object.values({ ...dollaImages }),
    years: [2020],
    description: "A simple landing page for a company that is only in my imagination for my own personal development."
  },
  {
    title: "Binusmaya 7",
    techs: "React | Typescript | Redux",
    backgroundUrl: bimayImg,
    imageUrls: Object.values({ ...bimayImages }),
    years: [2020],
    description: "Recreating Learning Management System and Course Management System for Bina Nusantara University."
  },
]