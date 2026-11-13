# Miguel Alejandro Gudiño Espejo

**Infrastructure & Platform Engineer | AI Enablement & Harness Engineering**\
📍 Buenos Aires, Argentina\
📧 m.gud.ops@proton.me | 🔗 [LinkedIn](https://linkedin.com/in/mgud) | 💻 [GitHub](https://github.com/mgud1989)

---

## 👷 Perfil Profesional

Mi recorrido acompañó la evolución del sector y del rol: empecé en **Infraestructura**, el rol se amplió a **SRE, DevOps, FinOps y Platform Engineering**, y hoy se centra en **AI Enablement & Harness Engineering**, con todo lo anterior asistido o totalmente automatizado por AI.

En esta etapa diseño y co-diseño los **arneses de AI** —agentes, skills y servidores **MCP**— que usan el equipo técnico y parte del resto de la compañía, extrayendo el conocimiento operativo y convirtiéndolo en procedimientos asistidos o 100% automatizados. Cuando otros equipos contribuyen a esos arneses, velo por su correcta integración y salud: estándares, validación, distribución y telemetría de uso. Además, asesoro y acompaño a colaboradores técnicos y no técnicos en la adopción y el aprovechamiento de herramientas de AI en su flujo de trabajo. También participo en el desarrollo de agentes de AI orientados al cliente final.

La operación sigue siendo parte del día a día: desarrollo de servicios internos, como el **IDP** para gestionar accesos self-service, seguros y efímeros; observabilidad, resiliencia y mantenimiento de microservicios principalmente serverless en un entorno AWS multi-account (~200 cuentas); y el seguimiento y gestión de costos.

### Áreas de Expertise

- **Cloud & Databases:** AWS (arquitectura multi-account, expertise en múltiples servicios). MongoDB Atlas (operación, performance, backups, restores y migraciones). GCP (fundamentos).
- **AI Agents:** AWS Bedrock, AgentCore, Strands Agents, RAG, Prompt Engineering, Model Context Protocol (MCP), Skills. **LLMOps:** diseño de sistemas de evaluación (evals) y KPIs de calidad para agentes en producción.
- **Platform Engineering:** Desarrollo de IDP para gestión, estandarización y automatización de la infraestructura y operación de servicios, acceso self-service a recursos de infraestructura, supervisión y reconciliación constante de accesos y backups de bases de datos.
- **AI Harness:** Desarrollo de _harnesses_ para equipos de desarrollo, servidores MCP propios, distribución org-wide vía marketplace de plugins y telemetría de adopción y uso. Gestión de _Claude.ai_ para la organización.
- **AI Enablement:** Capacitación en GenAI. Asesoría y mentoría en la adopción de herramientas de AI en flujos de trabajo técnicos y no técnicos; gobierno de las contribuciones de otros equipos a los arneses (estándares, validación, distribución, salud y telemetría de uso).
- **Infraestructura como Código:** AWS CloudFormation, Serverless Framework.
- **Observabilidad:** Diseño de esquemas de monitoreo, dashboards y alertas automatizadas. Grafana, CloudWatch, CW Cross-Account, Datadog.
- **DevSecOps & IAM:** Administración de identidades multi-account, least-privilege, accesos efímeros, control _two-person_ y Break Glass.
- **FinOps:** Análisis y optimización de costos (Cost Explorer, Budgets), right-sizing de recursos, reporting mensual.
- **Culture & Practices:** Blameless culture, Cynefin, Tuckman Model, Agile (mentalidad, no herramientas), OKRs.

---

## 📄 Experiencia Profesional

### Janis Commerce

**Infrastructure Engineer** | _2021 – Presente_\
_Evolución del rol: Infrastructure → SRE · DevOps · FinOps · Platform Engineering → AI Enablement & Harness Engineering_

- **AI & Agents:** Desarrollo de agentes de AI orientados al cliente final, permitiendo la interacción en lenguaje natural con la plataforma, los datos históricos y la documentación. Diseño del programa de confiabilidad post-GA del agente productivo: framework de KPIs de calidad (_Good Rate_ / _Eval Coverage_), sistema de evaluación (_evals_) y tooling de regresión.

- **Harness Engineering:** Desarrollo de los arneses de AI del equipo técnico (~30 desarrolladores) —agentes especializados, skills y servidores MCP propios—, aplicando una práctica de **extraer el conocimiento operativo y bajarlo a skills** para convertir procedimientos manuales en flujos asistidos o 100% automatizados. Entre los MCPs: **`janis-aws-mcp`** (observabilidad y debugging cross-account en AWS), **`janis-atlas-connect`** (conexión segura a los clusters de MongoDB Atlas) y **[`worklog-tracker`](https://github.com/mgud1989/worklog-tracker)** (carga asistida de horas, open source).

  Liderazgo end-to-end de su evolución: los arneses nacieron en un repositorio de herramientas compartidas y pasaron a **plugins versionados** distribuidos por marketplace. Luego vino un rediseño completo para integrarlos, optimizarlos y estandarizarlos, con fuentes canónicas únicas y tres tipos de skills: **procedimiento**, **conocimiento** y **flujos** (macro-procedimientos que orquestan a otras). En ese camino, el modelo de acceso de los MCPs maduró de _stdio_ con credenciales estáticas a servidores remotos con acceso por IAM y, finalmente, a MCPs remotos distribuidos por marketplace con autenticación vía IDP interno. Después, la distribución migró de un marketplace basado en git al **marketplace de la organización en claude.ai**, con roadmap de decisiones, guía de migración, comunicación y seguimiento de adopción.

  Para sostener el estándar, diseño de **harness health**: un chequeo que corre en cada sesión y verifica que cada desarrollador esté dentro del estándar y actualizado (diagnóstico automático, actualización forzada de plugins respetando la configuración del usuario, versión mínima del cliente), con validación de plugins en CI, soporte para macOS, Windows y Ubuntu/WSL, y **telemetría de adopción y uso** con su reporte.

- **Platform Engineering & DevOps:** Desarrollo de servicios internos que estandarizan, automatizan y gobiernan la infraestructura desplegada y la configuración de los servicios. Entre ellos, procesos de **reconciliación continua** que comparan el estado real contra el estado esperado y lo corrigen o alertan: reconciliación de accesos (que cada acceso vigente esté justificado y vencido cuando corresponde) y de backups de bases de datos (que cada cluster cumpla la política de backup definida). Diseño del modelo de identidad y acceso para los flujos de trabajo de los desarrolladores asistidos por agentes de AI, con credenciales efímeras, inalcanzables por humanos o agentes, autogestionadas, supervisadas y auditables. Gestión y evolución de la infraestructura en AWS con CloudFormation y Serverless Framework, principalmente sobre una arquitectura de **microservicios serverless** (Lambda, API Gateway, SQS, Step Functions); en años anteriores, también mantenimiento de la plataforma monolítica _legacy_ (EC2, ALB, RDS).

- **SRE & Observabilidad:** Responsable del diseño y mantenimiento del esquema de observabilidad, resiliencia y recuperación. Diseño del sistema de **generación automatizada y estandarizada de alarmas de CloudWatch** (reconciliación declarativa _config-as-code_, cross-account) con notificación automática al equipo _owner_ de cada recurso, sobre un parque de **1.700+ alarmas** en producción y con agrupación de eventos de alarma en hilos de incidente.

- **IAM & Seguridad:** Co-diseño del modelo de accesos self-service: los desarrolladores solicitan acceso a una cuenta de AWS o base de datos que necesitan y se les asigna en el momento (con o sin autorización previa según el nivel de acceso y el entorno), de forma **efímera, con revocación automática y con trazabilidad**. Proyecto de restricción del uso de permisos administrativos en un entorno multi-account (**~200 cuentas**): patrón _two-person control_ y esquema de Break Glass.

- **FinOps:** Reporte mensual de costos formalizado como procedimiento asistido (recolección de datos, análisis de costos, budgets, top servicios/recursos, costos respecto a volumen de operación), y supervisión y colaboración en la optimización del uso de los recursos.

### Soporte Técnico e Infraestructura (Roles Previos)

- Optimización y documentación de procesos de ABM (Altas, Bajas y Modificaciones) de usuarios en plataformas como GSuite, Slack, Okta y Jira, logrando una reducción significativa en la carga operativa del equipo.
- Administración de sistemas y servicios de infraestructura TI para usuarios internos.
- Automatización de procesos internos del área.

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

**Avanzada / Producción:**
`AWS` `Python` `JavaScript` `Bash` `CloudFormation` `Serverless_Framework` `Lambda` `Step_Fn` `SQS` `CloudWatch` `WAF` `AWS_Bedrock` `RAG` `MongoDB` `BitBucket_Pipelines` `MCP` `Claude_Code` `Cursor` `OpenCode`

**Básica / Autodidacta:**
`Docker` `AWS_ECS` `AWS_ECR` `Terraform` `Kubernetes` `GitHub_Actions`
