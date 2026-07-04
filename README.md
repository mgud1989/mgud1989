# Miguel Alejandro Gudiño Espejo

**Infrastructure & Platform Engineer | AI Specialist**\
📍 Buenos Aires, Argentina\
📧 m.gud1989@gmail.com | 🔗 [LinkedIn](https://linkedin.com/in/mgud) | 💻 [GitHub](https://github.com/mgud1989)

---

## 👷 Perfil Profesional

Ingeniero de Infraestructura orientado a **Site Reliability (SRE)** y **Platform Engineering**, especializado en la convergencia entre **infraestructura e Inteligencia Artificial Generativa**. Diseño y opero plataformas internas de desarrollo (**IDP**) que habilitan a los equipos técnicos mediante acceso self-service, seguro y efímero a la infraestructura. Mi foco actual es el **harness engineering**: construir el tooling —agentes de AI, servidores **MCP** y skills— que extrae el conocimiento operativo del equipo y lo convierte en procedimientos asistidos o 100% automatizados. Complemento esto con el desarrollo de agentes de AI orientados al cliente final.

### Áreas de Expertise

- **Cloud:** AWS (arquitectura multi-account, expertise en múltiples servicios), GCP (fundamentos).
- **AI & Agents:** AWS Bedrock, AgentCore, Strands Agents, RAG, Prompt Engineering, Model Context Protocol (MCP), Skills. **LLMOps:** diseño de sistemas de evaluación (evals) y KPIs de calidad para agentes en producción.
- **Platform Engineering / IDP:** Internal Developer Platform con acceso self-service, desarrollo de _harnesses_ para equipos de desarrollo, servidores MCP propios y distribución vía marketplace de plugins.
- **Infraestructura como Código:** AWS CloudFormation, Serverless Framework.
- **Contenedores:** Docker.
- **Observabilidad:** Diseño de esquemas de monitoreo, dashboards y alertas automatizadas. Grafana, CloudWatch, CW Cross-Account, Datadog.
- **DevSecOps & IAM:** Administración de identidades multi-account, least-privilege, accesos efímeros, control _two-person_ y Break Glass.
- **FinOps:** Análisis y optimización de costos (Cost Explorer, Budgets), right-sizing de recursos, reporting mensual.
- **DevOps Culture:** Metodologías Agile, OKRs, Spec-Driven Development (SDD), Blameless culture, Cynefin.

---

## 📄 Experiencia Profesional

### Janis Commerce

**Infrastructure & AI Specialist** | _2021 – Presente_

- **AI & Agents:** Desarrollo de agentes de AI orientados al cliente final, permitiendo la interacción en lenguaje natural con la plataforma, los datos históricos y la documentación. Diseño del programa de confiabilidad post-GA del agente productivo: framework de KPIs de calidad (_Good Rate_ / _Eval Coverage_), sistema de evaluación (_evals_) y tooling de regresión. Asesoramiento en la adopción general y aplicada de Gen AI como tecnología.

- **IDP & Harness Engineering:** Desarrollo de _harnesses_ para el equipo de desarrollo —agentes especializados, skills y servidores **MCP**— aplicando una práctica de **extraer el conocimiento operativo y bajarlo a skills**, convirtiendo procedimientos manuales en flujos asistidos o 100% automatizados. Diseño y evolución de servidores MCP propios, algunos con una maduración de su modelo de acceso desde _stdio_ con credenciales estáticas → remotos con acceso por IAM → MCP remotos distribuidos por marketplace de plugins con autenticación vía IDP interno:
  - **`janis-aws-mcp`:** observabilidad y debugging de recursos y servicios en AWS de forma cross-account.
  - **`janis-atlas-connect`:** conexión segura y fluida a los clusters de MongoDB en Atlas.
  - **[`worklog-tracker`](https://github.com/mgud1989/worklog-tracker):** carga asistida de horas de desarrollo (open source).

- **Identidad & Acceso para Agentes:** Diseño del modelo de identidad y acceso para los agentes de AI de los desarrolladores. Siempre con el objetivo de tener credenciales efímeras, inalcanzables por humanos o agentes, autogestionadas, supervisadas y auditables.

- **Platform Engineering & SRE:** Responsable del diseño y mantenimiento del esquema de observabilidad, resiliencia y recuperación. Diseño del sistema de **generación automatizada y estandarizada de alarmas de CloudWatch** (reconciliación declarativa _config-as-code_, cross-account) con notificación automática al equipo _owner_ de cada recurso, sobre un parque de **1.700+ alarmas** en producción y con agrupación de eventos de alarma en hilos de incidente. Gestión y evolución de la infraestructura en AWS bajo arquitectura Serverless y monolítica, con CloudFormation y Serverless Framework.

- **IAM & Seguridad:** Co-diseño del modelo de accesos self-service: los desarrolladores solicitan acceso a una cuenta de AWS o base de datos que necesitan y se les asigna en el momento (con o sin autorización previa según el nivel de acceso y el entorno), de forma **efímera y con revocación automática**, y trazabilidad. Proyecto de restricción del uso de permisos administrativos en un entorno multi-account (**200+ cuentas**): patrón _two-person control_ y esquema de Break Glass.
- **FinOps:** Reporte mensual de costos formalizado como procedimiento asistido (análisis de costos, budgets, top servicios, Savings Plans) y supervisión y colaboración en la optimización de clusters de MongoDB Atlas.

### Soporte Técnico e Infraestructura (Roles Previos)

- Optimización y documentación de procesos de ABM (Altas, Bajas y Modificaciones) de usuarios en plataformas como GSuite, Slack, Okta y Jira, logrando una reducción significativa en la carga operativa del equipo.
- Administración de sistemas y servicios de infraestructura TI para usuarios internos.

---

## 🎓 Educación

- **Técnico Superior en Informática** | Instituto Universitario de Tecnología Dr. Federico Rivero Palacio.
- **Técnico en Mantenimiento de Vías Férreas** | IUTOMS (2013).

---

## 📚 Certificaciones y Formación Continua

- **Máster de Inteligencia Artificial** | BIG School, España (2025).
- **AWS Certified Cloud Practitioner** | Amazon Web Services (2021).
- **AWS CloudFormation Master Class** | Udemy (2021).
- **Deep Dive with Security: IAM** | AWS Training (2021).
- **Administración de sistemas y servicios de infraestructura TI** | Google / Coursera.
- **Desarrollador Java** | Plan 111mil / Codo a Codo.

---

## 🧰 Tecnologías & Herramientas

**Producción:**
`Python` `JavaScript` `Bash` `AWS` `CloudFormation` `Serverless_Framework` `MCP` `AWS_Bedrock` `Strands_Agents` `AgentCore` `RAG` `MongoDB` `SQL` `Docker` `Git` `BitBucket_Pipelines` `CloudWatch` `Claude_Code` `Cursor` `Jira`

**Familiar / Autodidacta:**
`Terraform` `Kubernetes` `GitHub_Actions`
