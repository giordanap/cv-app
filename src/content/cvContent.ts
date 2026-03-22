import {
  type CvDataset,
  type Locale,
  type ProfileMode,
  type ResolvedCv,
  type ExpertiseGroup,
  type EmploymentBullet,
} from '../types/cv'

const dataset: CvDataset = {
  person: {
    fullName: 'Giordan Arredondo',
    baseTitle: 'Software Developer',
    phone: '+51931017921',
    email: 'garredondop@uni.pe',
  },
  links: {
    github: 'https://github.com/giordanap',
    twitter: 'https://x.com/GiordanArredon2',
    linkedin: 'https://www.linkedin.com/in/garredondop/',
  },
  labels: {
    es: {
      contact: 'Contacto',
      expertise: 'Competencias',
      hobbies: 'Hobbies',
      languages: 'Idiomas',
      summary: 'Perfil profesional',
      employment: 'Experiencia laboral',
      education: 'Formacion',
      references: 'Referencias',
      referencesText: 'Referencias disponibles bajo peticion',
      downloadAria: 'Descargar PDF',
      languageSwitch: 'Idioma',
      profileSwitch: 'Perfil',
      toneSwitch: 'Tono',
    },
    en: {
      contact: 'Contact',
      expertise: 'Expertise',
      hobbies: 'Hobbies',
      languages: 'Languages',
      summary: 'Professional Summary',
      employment: 'Employment History',
      education: 'Education',
      references: 'References',
      referencesText: 'References available upon request',
      downloadAria: 'Download PDF',
      languageSwitch: 'Language',
      profileSwitch: 'Profile',
      toneSwitch: 'Tone',
    },
  },
  summary: {
    common: [],
    byProfile: {
      dotnet: [
        {
          es: 'Desarrollador Full Stack Senior con 10 anos de experiencia en la construccion de aplicaciones web escalables utilizando Angular, React y .NET. Solida experiencia en formularios reactivos, logica de validaciones y arquitectura basada en componentes. Habilidad para integrar reglas de negocio complejas, optimizar la experiencia de usuario y mantener un codigo limpio y testeable. Experiencia en microservicios, plataformas cloud (Azure/AWS) y trabajo colaborativo en equipos para entregar soluciones empresariales robustas y eficientes.',
          en: 'Senior Full Stack Developer with 10 years of experience delivering scalable web applications using Angular, React, and .NET technologies. Strong background in building reactive forms, implementing complex validation logic, and applying component-based architecture. Proven ability to translate intricate business rules into robust backend logic while enhancing user experience and maintaining clean, testable code. Skilled in designing microservices and deploying enterprise-grade solutions on cloud platforms such as Azure and AWS, working closely with cross-functional teams to ensure high-quality outcomes.',
        },
      ],
      node: [
        {
          es: 'Desarrollador Full Stack Senior con 10 anos de experiencia en la construccion de aplicaciones web escalables utilizando Angular, React, NodeJS y NestJS. Solida experiencia en formularios reactivos, logica de validaciones y arquitectura basada en componentes. Habilidad para integrar reglas de negocio complejas, optimizar la experiencia de usuario y mantener un codigo limpio y testeable. Experiencia en microservicios, plataformas cloud (Azure/AWS) y trabajo colaborativo en equipos para entregar soluciones empresariales robustas y eficientes.',
          en: 'Senior Full Stack Developer with 10 years of experience building scalable web applications using Angular, React, Node.js, and NestJS. Highly experienced in reactive form handling, dynamic validation flows, and modular component-driven architecture. Adept at integrating complex business logic into maintainable backend services, optimizing user experience, and writing clean, reliable code. Extensive knowledge of microservices, serverless architectures, and cloud deployments on AWS and Azure, with a strong collaborative approach to delivering resilient and high-performing software solutions.',
        },
      ],
    },
  },
  expertise: {
    common: [],
    byProfile: {
      dotnet: [
        {
          title: { es: 'Frontend', en: 'Frontend' },
          items: [
            { es: 'HTML', en: 'HTML' },
            { es: 'CSS', en: 'CSS' },
            { es: 'React', en: 'React' },
            { es: 'Angular', en: 'Angular' },
            { es: 'TypeScript', en: 'TypeScript' },
            { es: 'RxJS', en: 'RxJS' },
          ],
        },
        {
          title: { es: 'Backend', en: 'Backend' },
          items: [
            { es: 'C#', en: 'C#' },
            { es: '.NET', en: '.NET' },
            { es: '.NET Core', en: '.NET Core' },
            { es: 'CQRS', en: 'CQRS' },
            { es: 'RESTful', en: 'RESTful' },
            { es: 'JWT', en: 'JWT' },
            { es: 'Clean Architecture', en: 'Clean Architecture' },
          ],
        },
        {
          title: { es: 'Data', en: 'Data' },
          items: [
            { es: 'SQL Server', en: 'SQL Server' },
            { es: 'PostgreSQL', en: 'PostgreSQL' },
            { es: 'MySQL', en: 'MySQL' },
            { es: 'MongoDB', en: 'MongoDB' },
            { es: 'DynamoDB', en: 'DynamoDB' },
            { es: 'Redis', en: 'Redis' },
          ],
        },
        {
          title: { es: 'Cloud y Mensajeria', en: 'Cloud and Messaging' },
          items: [
            { es: 'RabbitMQ', en: 'RabbitMQ' },
            { es: 'SQS', en: 'SQS' },
            { es: 'SNS', en: 'SNS' },
            { es: 'Docker', en: 'Docker' },
            { es: 'Lambda', en: 'Lambda' },
            { es: 'EC2', en: 'EC2' },
            { es: 'CloudWatch', en: 'CloudWatch' },
            { es: 'Azure', en: 'Azure' },
            { es: 'Serverless', en: 'Serverless' },
          ],
        },
      ],
      node: [
        {
          title: { es: 'Frontend', en: 'Frontend' },
          items: [
            { es: 'HTML', en: 'HTML' },
            { es: 'CSS', en: 'CSS' },
            { es: 'React', en: 'React' },
            { es: 'Angular', en: 'Angular' },
            { es: 'TypeScript', en: 'TypeScript' },
            { es: 'RxJS', en: 'RxJS' },
          ],
        },
        {
          title: { es: 'Backend', en: 'Backend' },
          items: [
            { es: 'NodeJS', en: 'NodeJS' },
            { es: 'NestJS', en: 'NestJS' },
            { es: 'KOA', en: 'KOA' },
            { es: 'Express', en: 'Express' },
            { es: 'RESTful', en: 'RESTful' },
            { es: 'JWT', en: 'JWT' },
            { es: 'Clean Architecture', en: 'Clean Architecture' },
          ],
        },
        {
          title: { es: 'Data', en: 'Data' },
          items: [
            { es: 'SQL Server', en: 'SQL Server' },
            { es: 'PostgreSQL', en: 'PostgreSQL' },
            { es: 'MySQL', en: 'MySQL' },
            { es: 'MongoDB', en: 'MongoDB' },
            { es: 'DynamoDB', en: 'DynamoDB' },
            { es: 'Redis', en: 'Redis' },
          ],
        },
        {
          title: { es: 'Cloud y Mensajeria', en: 'Cloud and Messaging' },
          items: [
            { es: 'RabbitMQ', en: 'RabbitMQ' },
            { es: 'SQS', en: 'SQS' },
            { es: 'SNS', en: 'SNS' },
            { es: 'Docker', en: 'Docker' },
            { es: 'Lambda', en: 'Lambda' },
            { es: 'EC2', en: 'EC2' },
            { es: 'CloudWatch', en: 'CloudWatch' },
            { es: 'Azure', en: 'Azure' },
            { es: 'Serverless', en: 'Serverless' },
          ],
        },
      ],
    },
  },
  hobbies: [
    {
      text: {
        es: 'Hacer karaoke',
        en: 'Karaoke singing',
      },
    },
    {
      text: {
        es: 'Tocar guitarra',
        en: 'Playing guitar',
      },
    },
    {
      text: {
        es: 'Jugar futbol',
        en: 'Playing football (soccer)',
      },
    },
  ],
  languages: [
    {
      name: { es: 'Espanol', en: 'Spanish' },
      level: 100,
    },
    {
      name: { es: 'Ingles', en: 'English' },
      level: 80,
    },
  ],
  employment: [
    {
      id: 'encora',
      dateRange: { es: '2023 - Presente', en: '2023 - Present' },
      role: {
        common: { es: 'Senior Software Engineer', en: 'Senior Software Engineer' },
      },
      company: 'Encora',
      location: { es: 'Lima, Peru', en: 'Lima, Peru' },
      bullets: {
        common: [
          {
            text: {
              es: 'Redisene el sistema de onboarding de vendedores aplicando estrategias de cache, reduciendo los tiempos de respuesta en un 35%.',
              en: 'Redesigned the vendor onboarding system by implementing caching strategies, resulting in a 35% reduction in response times.',
            },
            emphasis: {
              es: ['onboarding de vendedores', '35%'],
              en: ['vendor onboarding system', '35%'],
            },
          },
          {
            text: {
              es: 'Fortaleci la seguridad de las APIs GraphQL mediante validaciones de carga y limites de complejidad para prevenir ataques DoS.',
              en: 'Strengthened GraphQL API security by applying request validation and complexity limits to mitigate DoS threats.',
            },
            emphasis: {
              es: ['APIs GraphQL', 'DoS'],
              en: ['GraphQL API', 'DoS'],
            },
          },
        ],
        byProfile: {
          dotnet: [
            {
              text: {
                es: 'Lidere la migracion de componentes backend a arquitectura serverless en Azure Functions, mejorando escalabilidad y reduciendo consumo de recursos.',
                en: 'Led the migration of critical backend components to a serverless architecture using Azure Functions, improving scalability and reducing infrastructure overhead.',
              },
              emphasis: {
                es: ['Azure Functions', 'escalabilidad'],
                en: ['Azure Functions', 'scalability'],
              },
            },
          ],
          node: [
            {
              text: {
                es: 'Lidere la migracion de componentes backend a arquitectura serverless en AWS Lambda, mejorando escalabilidad y reduciendo consumo de recursos.',
                en: 'Led the migration of critical backend components to a serverless architecture using AWS Lambda, improving scalability and reducing infrastructure overhead.',
              },
              emphasis: {
                es: ['AWS Lambda', 'escalabilidad'],
                en: ['AWS Lambda', 'scalability'],
              },
            },
          ],
        },
      },
      stack: {
        dotnet: [
          '.NET Core',
          'CQRS',
          'Angular',
          'RxJS',
          'Azure Functions',
          'Azure Blob Storage',
          'Azure App Services',
          'SQL Server',
          'Azure Key Vault',
        ],
        node: [
          'Node.js',
          'KOA',
          '.NET Core',
          'AWS Lambda',
          'SQS',
          'SNS',
          'ElastiCache',
          'DynamoDB',
          'SQL Server',
          'React',
          'Gatsby',
        ],
      },
    },
    {
      id: 'ntt-data-fullstack',
      dateRange: { es: 'Septiembre 2022 - Noviembre 2023', en: 'September 2022 - November 2023' },
      role: {
        common: { es: 'Full Stack Developer', en: 'Full Stack Developer' },
      },
      company: 'NTT DATA',
      location: { es: 'Lima, Peru', en: 'Lima, Peru' },
      bullets: {
        common: [
          {
            text: {
              es: 'Desarrolle dashboards analiticos con React tipo Grafana, mejorando visualizacion de KPIs y reduciendo tiempos de carga hasta un 40%.',
              en: 'Developed analytical dashboards using React with a Grafana-like interface, improving KPI visualization and reducing load times by up to 40%.',
            },
            emphasis: {
              es: ['dashboards analiticos', 'React', '40%'],
              en: ['analytical dashboards', 'React', '40%'],
            },
          },
          {
            text: {
              es: 'Refactorice endpoints backend aplicando principios SOLID y patrones de diseno para mejorar mantenibilidad y pruebas automatizadas.',
              en: 'Refactored backend endpoints applying SOLID principles and design patterns to improve maintainability and automated testing.',
            },
            emphasis: {
              es: ['SOLID', 'patrones de diseno'],
              en: ['SOLID principles', 'design patterns'],
            },
          },
        ],
      },
      stack: {
        dotnet: ['React', '.NET Core', 'PostgreSQL', 'MongoDB', 'Docker', 'Python', 'EC2'],
        node: ['NestJS', 'React', 'SQL Server', 'MongoDB', 'Docker', 'Python', 'EC2'],
      },
    },
    {
      id: 'ntt-data-senior',
      dateRange: { es: 'Agosto 2020 - Septiembre 2022', en: 'August 2020 - September 2022' },
      role: {
        common: { es: 'Senior Software Engineer', en: 'Senior Software Engineer' },
      },
      company: 'NTT Data',
      location: { es: 'Lima, Peru', en: 'Lima, Peru' },
      bullets: {
        common: [
          {
            text: {
              es: 'Lidere la migracion de una plataforma legacy en .NET Framework a microservicios escalables usando NestJS y AWS.',
              en: 'Led the migration of a legacy platform built on .NET Framework to a scalable microservices architecture using NestJS and AWS.',
            },
            emphasis: {
              es: ['.NET Framework', 'microservicios escalables', 'NestJS', 'AWS'],
              en: ['.NET Framework', 'scalable microservices architecture', 'NestJS', 'AWS'],
            },
          },
        ],
      },
      stack: {
        dotnet: ['NestJS', '.NET', 'AWS Lambda', 'S3', 'DynamoDB', 'CloudWatch', 'API Gateway', 'Docker'],
        node: ['NestJS', 'AWS Lambda', 'S3', 'DynamoDB', 'CloudWatch', 'API Gateway', 'Docker'],
      },
    },
    {
      id: 'acceso-crediticio',
      dateRange: { es: 'Octubre 2018 - Agosto 2020', en: 'October 2018 - August 2020' },
      role: {
        common: { es: 'Frontend and Data Developer', en: 'Frontend and Data Developer' },
      },
      company: 'Acceso Crediticio',
      location: { es: 'Lima, Peru', en: 'Lima, Peru' },
      bullets: {
        common: [
          {
            text: {
              es: 'Construi dashboards interactivos con React y WebSockets para monitoreo de KPIs y decisiones en tiempo real.',
              en: 'Built interactive dashboards using React and WebSockets for real-time KPI monitoring and faster data-driven decisions.',
            },
            emphasis: {
              es: ['React', 'WebSockets', 'tiempo real'],
              en: ['React', 'WebSockets', 'real-time KPI monitoring'],
            },
          },
        ],
      },
      stack: {
        dotnet: ['React', 'Chart.js', 'WebSockets', 'MongoDB', 'Docker', 'Jest', 'SCRUM'],
        node: ['React', 'NestJS', 'Chart.js', 'WebSockets', 'MongoDB', 'Docker', 'Jest', 'SCRUM'],
      },
    },
    {
      id: 'apm-terminals',
      dateRange: { es: 'Noviembre 2017 - Octubre 2018', en: 'November 2017 - October 2018' },
      role: {
        common: { es: 'Software Developer', en: 'Software Developer' },
      },
      company: 'APM Terminals',
      location: { es: 'Callao, Peru', en: 'Callao, Peru' },
      bullets: {
        common: [
          {
            text: {
              es: 'Desarrolle interfaces web orientadas a visualizacion operativa del terminal, optimizando UX y tiempo de carga.',
              en: 'Developed web interfaces focused on terminal operations visualization, optimizing UX and load performance.',
            },
            emphasis: {
              es: ['interfaces web', 'UX', 'tiempo de carga'],
              en: ['web interfaces', 'UX', 'load performance'],
            },
          },
        ],
      },
      stack: {
        dotnet: ['.NET', 'TypeScript', 'SQL Server', 'Swagger', 'Serverless', 'DynamoDB'],
        node: ['Node.js', 'TypeScript', 'SQL Server', 'Swagger', 'Serverless', 'DynamoDB'],
      },
    },
    {
      id: 'pro-empresa',
      dateRange: { es: 'Noviembre 2016 - Noviembre 2017', en: 'November 2016 - November 2017' },
      role: {
        common: { es: 'Software Developer Trainee', en: 'Software Developer Trainee' },
      },
      company: 'Pro Empresa',
      location: { es: 'Lima, Peru', en: 'Lima, Peru' },
      bullets: {
        common: [
          {
            text: {
              es: 'Colabore en desarrollo de software y analisis de datos en entorno multidisciplinario, aplicando principios estadisticos.',
              en: 'Collaborated on software development and data analysis in a multidisciplinary environment, applying statistical principles.',
            },
            emphasis: {
              es: ['desarrollo de software', 'analisis de datos', 'principios estadisticos'],
              en: ['software development', 'data analysis', 'statistical principles'],
            },
          },
        ],
      },
      stack: {
        dotnet: ['.NET', 'SQL Server', 'Power BI', 'Python'],
        node: ['Node.js', 'SQL Server', 'Power BI', 'Python'],
      },
    },
  ],
  education: [
    {
      dateRange: { es: 'Marzo 2014 - Diciembre 2018', en: 'March 2014 - December 2018' },
      institution: 'National University of Engineering (UNI)',
      location: 'Lima, Peru',
      degree: { es: 'Bachiller', en: 'Bachelor' },
      field: { es: 'Ingenieria Estadistica', en: 'Statistical Engineering' },
    },
  ],
}

const buildWhatsAppLink = (phone: string): string => {
  const digits = phone.replace(/\D/g, '')
  return `https://wa.me/${digits}`
}

const mergeExpertise = (
  locale: Locale,
  profile: ProfileMode,
): { title: string; items: string[] }[] => {
  const profileGroups = dataset.expertise.byProfile[profile] ?? []
  const allGroups: ExpertiseGroup[] = [...dataset.expertise.common, ...profileGroups]

  return allGroups.map((group) => ({
    title: group.title[locale],
    items: group.items.map((item) => item[locale]),
  }))
}

const resolveBullets = (
  locale: Locale,
  profile: ProfileMode,
  bullets: {
    common: EmploymentBullet[]
    byProfile?: Partial<Record<ProfileMode, EmploymentBullet[]>>
  },
) => {
  const scoped = [...bullets.common, ...(bullets.byProfile?.[profile] ?? [])]

  return scoped.map((bullet) => ({
    text: bullet.text[locale],
    emphasis: bullet.emphasis?.[locale] ?? [],
  }))
}

export const resolveCv = (locale: Locale, profile: ProfileMode): ResolvedCv => {
  const summary = [
    ...dataset.summary.common.map((paragraph) => paragraph[locale]),
    ...dataset.summary.byProfile[profile].map((paragraph) => paragraph[locale]),
  ]

  return {
    locale,
    profile,
    labels: dataset.labels[locale],
    person: dataset.person,
    links: {
      ...dataset.links,
      whatsapp: buildWhatsAppLink(dataset.person.phone),
    },
    expertise: mergeExpertise(locale, profile),
    hobbies: dataset.hobbies.map((hobby) => hobby.text[locale]),
    languages: dataset.languages.map((language) => ({
      name: language.name[locale],
      level: language.level,
    })),
    summary,
    employment: dataset.employment.map((entry) => {
      const role = entry.role.byProfile?.[profile] ?? entry.role.common

      return {
        id: entry.id,
        company: entry.company,
        location: entry.location[locale],
        dateRange: entry.dateRange[locale],
        role: role[locale],
        bullets: resolveBullets(locale, profile, entry.bullets),
        stack: entry.stack[profile],
      }
    }),
    education: dataset.education.map((entry) => ({
      dateRange: entry.dateRange[locale],
      institution: entry.institution,
      location: entry.location,
      degree: entry.degree[locale],
      field: entry.field?.[locale],
    })),
  }
}

export type { Locale, ProfileMode } from '../types/cv'
