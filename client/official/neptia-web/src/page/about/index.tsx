import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { useState } from "react";

function About() {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  // 获取当前语言
  const currentLanguage = i18n.language;

  // 团队成员详细信息
  const teamDetails_zh = [
    {
      name: "Roland Wayne",
      role: "创始人兼首席执行官",
      image:
        "https://img1.baidu.com/it/u=786054042,1849765110&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200",
      shortDescription: "慢病卫生经济专家｜医学教育战略家｜跨国医疗资源整合者",
      fullDescription: `Roland专注于心血管疾病、糖尿病等慢性病的卫生经济研究与临床数据建模，同时也是医学领域B2C服务体系的搭建者、操盘者与推动者。Roland已经在医学升学赛道深耕多年，目前已经建立非常完善的个人IP系统。

作为团队总负责人，Roland 全面负责导师团队的组建、管理与人才发展机制设计，自主开发服务流程标准化体系和智能化文书评价系统，大幅提升服务交付的透明度与可控性。统筹管理医学本硕博申请全流程，累计实现全球顶尖高校600+录取，并连续数年为多个家庭拿下香港，英国和澳洲医学院录取。

在团队运营与项目交付方面，Roland 制定了科学高效的项目管理制度和成果追踪流程，主导内部知识库建设与应用场景课程开发，已撰写内部培训资料超三十万字，带领团队持续优化服务细节，实现从内容、社群到品牌转化的高效闭环。他高度重视交付结果与用户体验，确保每一位学员都能获得定制化、可衡量的申请与成长路径。

Roland 致力于为各大海外高等教育机构及私营医疗企业提供中国市场准入全流程协助，凭借多年的行业洞察与跨国项目管理经验，深入分析中国市场的独特需求与发展趋势。他系统梳理相关法律法规、合规要求及政策动态，为合作方量身定制进入中国市场的战略路径和落地方案。

在服务过程中，Roland 统筹团队资源，建立高效沟通机制，确保项目各阶段顺利推进。他不仅为客户解析市场准入流程，提供政策解读与风险评估，还协助搭建本地合作网络，推动品牌本土化和业务合规发展。通过专业的市场调研、政策分析和多部门协作，帮助合作伙伴最大化降低准入壁垒，提升市场竞争力，实现可持续发展目标。

目前常驻澳大利亚昆士兰州，作为临床研究者、一线管理者、战略决策者、服务交付者的多重身份长期活跃在一线，以全局化视野统筹项目推进与资源整合。`,
      education: "卫生经济与临床数据建模方向",
      experience: "15+ 年医疗咨询和教育技术经验",
      expertise: [
        "心血管疾病/糖尿病卫生经济学",
        "医学申请全流程管理",
        "中国市场准入战略",
      ],
    },
    {
      name: "Dr. David Shi",
      role: "首席导师",
      image:
        "https://img0.baidu.com/it/u=2690673028,2887223497&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200",
      shortDescription: "理工医交叉背景医学升学专家",
      fullDescription: `Dr. David是澳大利亚昆士兰大学临床医学博士，同时也是澳大利亚悉尼大学计算机与医学科学双学士以数据分析和计算建模能力为核心，结合对应用医学的深度兴趣，成功转向临床医学方向，并通过全流程独立申请进入医学院深造，熟知澳洲及其他主流英语国家医学院申请流程、考试机制、面试评估体系。同时具备深厚的理工+医学交叉背景与一线申请、教学实战经验。

作为悉尼大学计算机科学学院资深教学助理（TA），至今已连续5年授课，主讲内容覆盖操作系统、网络原理、系统编程等基础课程，累计指导学生超300人次，深受学生与学院肯定，具备优秀的表达能力、教学能力与任务组织力。

擅长领域包括澳洲在内的英联邦地区临床医学（MBBS/MD）、牙医（BDS）项目申请，包含本科预科+医学博士MD；申请材料准备、入学考试辅导与结构化面试模拟；跨专业背景转化申请策略设计；医学数据分析、机器学习、临床研究方法建模应用；海外适应辅导：本地文化理解、学术交流礼仪、国际学生生活支持。

Dr. David教学风格逻辑清晰、语言简洁有力，擅长帮助学生在困惑中厘清方向，在不同背景之间找出连接点，实现转型突破。对于如何把技术转化为临床能力、如何从零起步准备医学申请、如何用多次失败换来一次质变，David更懂方法，也更懂情绪。`,
      education: "昆士兰大学-临床医学博士",
      experience: "10+ 年科技和医疗教育经验",
      expertise: [
        "英联邦医学申请（MBBS/MD/BDS）",
        "跨专业转医学策略",
        "医学数据建模",
      ],
    },
    {
      name: "Dr. James Liu",
      role: "首席学术顾问",
      image:
        "https://img2.baidu.com/it/u=2875102597,3387218720&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=572",
      shortDescription: "心理学权威导师｜G5升学专家｜精神健康科研领航者",
      fullDescription: `Dr. James老师在英国顶级大学获得了心理学本硕博学位，并在中国顶尖医学院国家重点实验室担任博士后研究员，专注青少年心理健康、物质依赖、精神障碍干预与社会精神医学模型等领域，善于将基础心理学理论与临床干预实践相结合。以第一作者或通讯作者身份发表英文学术论文数篇，并参编学术专著1部。具备独立课题申请与执行经验，曾参与国家自然科学基金青年项目、教育部“海优计划”及省科技厅项目等标书撰写，熟悉从科研设计到经费申请的完整流程。

作为首席学术顾问，Dr. James具备完整的本-硕-博及国内博后路径申请经验，熟悉英联邦地区各阶段申请流程及材料标准，尤其擅长文书内容的结构优化与研究潜力挖掘。已帮助多位学生成功申请英国G5院校，其中包括来自普通本科背景的三本院校申请者，实现逆袭斩获G5 offer的成功案例。同时也包括牛津大学，哈佛大学等学校研究型硕士和博士录取。

Dr. James 具备SCI论文写作与发表辅导能力，能够以通讯作者身份协助学生完成高水平论文发表与投稿。辅导方向涵盖心理学、精神医学、康复医学、公共卫生、教育学等硕博申请，善于用系统性思维，帮助学生从科研方向规划、材料撰写、面试展示到长期发展路径实现高质量成长。

他以创新、务实和共情为核心教学风格，不仅致力于学术成果的交付，更注重申请者科研能力和国际视野的全面提升。`,
      education: "英国Top大学 - 心理学博士",
      experience: "12+ 年心理学研究和教育经验",
      expertise: [
        "心理学/精神医学硕博申请",
        "G5逆袭案例（三本→牛津）",
        "SCI论文辅导",
      ],
    },
    {
      name: "Dr. Donald Liu",
      role: "高级学术顾问",
      image:
        "https://img2.baidu.com/it/u=346777935,2381906310&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200",
      shortDescription: "糖尿病临床数据科学家",
      fullDescription: `Dr. Donald是瑞典卡罗琳医学院访问学者，也是英国格拉斯哥大学心血管科学博士，毕业于伦敦卫生与热带医学院公共卫生硕士。专注于糖尿病、糖尿病并发症及慢性肾脏病的临床流行病学研究，擅长基于大规模医疗数据库进行临床科研设计与数据建模，研究成果已在高水平SCI期刊中广泛发表。

研究方向聚焦于实际临床问题解决，以数据驱动为导向，熟练运用CPRD、UK Biobank、瑞典国家患者登记册（NPR）、国家糖尿病登记册（NDR）及处方药物登记册（PDR）等多源数据库进行分析，掌握包括生存分析、预后模型、非线性建模、竞争风险模型、Meta分析在内的多种研究方法。

截至2025年4月，已以第一作者或通讯作者身份发表9篇SCI论文，其中包含中科院一区期刊1篇（影响因子9.4）、二区期刊3篇（最高IF 7.1），并已累计获得H-index=6。多次受邀在欧洲糖尿病研究协会（EASD）年会上进行口头报告，曾获得NHS Graham Wilson Travelling Scholarship、EASD Travel Grant、Alexander Fairley Scholarship等多项国际学术资助与奖学金。

在WIS，Dr. Donald负责公司科研能力提升与项目研发，主导医学科研创新、数据分析及科研能力培养体系的建设。他以严谨的科学思维和丰富的国际经验，指导申请者系统提升学术软实力，擅长为临床/科研型申请人定制高水平硕博申请规划，极大提高了英联邦及欧陆健康相关专业的录取率。他尤其擅长帮助临床背景或科研转轨型申请者，制定清晰可执行的申请规划，提升学术呈现力与录取率。以数据驱动和临床导向，致力于将国际科研标准与公司服务深度融合，为申请者提供顶尖的学术规划、科研训练与升学指导，帮助众多学员成功进入UCL、香港大学、爱丁堡大学等世界名校。`,
      education: "格拉斯哥大学 - 心血管博士",
      experience: "8+ 年医学研究和教育经验",
      expertise: [
        "糖尿病临床流行病学",
        "大数据分析（UK Biobank等）",
        "英欧医学科研申请",
      ],
    },
    {
      name: "Ariel Wu",
      role: "资深个人发展规划师",
      image:
        "https://img2.baidu.com/it/u=2571077073,287093969&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
      shortDescription: "肌骨康复实战专家",
      fullDescription: `Ariel拥有香港理工大学运动物理治疗硕士学位，曾在广东和四川地区头部医院担任康复治疗师，并获四川大学华西医院康复医学中心物理治疗师规范化培训认证。她深耕骨科术后康复、运动损伤及慢性肌肉骨骼系统疾病干预，累计主导数百例一线康复案例，具备极强的临床敏感度和跨地区多元实践视角。雅思总分7.0，能够流畅应对国际学术与工作交流。

作为资深个人发展规划师，Ariel老师以“实战引导+专业共情”为核心辅导理念，善于从学生的临床实习、科研实践与兴趣方向中提炼应用场景+学术潜力，引导学生从“模糊方向”走向“精准定位”，建立系统化择校与文书框架。尤其擅长辅导英国与香港地区一年制康复类硕士项目的申请，成功案例覆盖香港理工大学，香港中文大学，UCL等高校的康复，公共卫生专业。擅长辅导方向包括肌骨康复 / 运动物理治疗 / 运动康复相关硕士项目申请；英港院校一年制硕士申请路径及奖学金咨询；临床经历表达策略、个人陈述亮点提炼、面试答题结构设计

Ariel不仅是专业的康复治疗师，更是学生成长道路上的“方向引导者与信心赋能者”。以亲切务实的风格，持续保持面试成功率100%，助力众多申请者实现从“临床经验型申请人”到“科研与应用兼备的国际医疗人才”的成功转型。`,
      education: "香港理工大学 - 运动物理治疗硕士",
      experience: "6+ 年运动物理治疗和教育咨询经验",
      expertise: [
        "英港一年制康复硕士申请",
        "肌骨/运动损伤文书优化",
        "临床→科研转型辅导",
      ],
    },

    {
      name: "Doris Lau",
      role: "战略规划总监",
      image:
        "https://img2.baidu.com/it/u=2571077073,287093969&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
      shortDescription: "神经康复战略专家",
      fullDescription: `Doris Lau拥有澳大利亚悉尼大学大脑与认知科学硕士及邦德大学作业治疗学硕士双重学术背景，具备前沿的跨学科视角与深厚的研究素养。长期专注于神经康复与认知科学领域，擅长将学术研究与实际项目相结合，推动团队实现学术与实践的双重创新。

作为WIS战略规划总监，Doris以系统化的战略思维和卓越的规划能力，主导团队中长期发展方向和核心项目的顶层设计。她善于把握行业趋势，整合全球医疗教育资源，推动团队不断突破服务与管理边界。Doris注重高效协作与目标落地，建立了一套科学可执行的项目管理体系，确保团队始终保持高标准的服务交付和持续成长。还专注于协助海外大学和医疗机构进入中国市场。她提供本地市场特征、法规合规性、合作伙伴关系构建和运营本地化的战略咨询，帮助合作伙伴将国际资源与本地洞察相结合，实现成功且可持续的扩张。

Doris坚信，精准的战略规划与专业的管理执行，是成就团队和学员共同成功的关键驱动力。`,
      education: "悉尼大学 - 认知科学硕士",
      experience: "6+ 年运动物理治疗和教育咨询经验",
      expertise: ["神经康复战略规划", "中国市场准入咨询"],
    },
    {
      name: "Cecelia Xu",
      role: "运营总监",
      image:
        "https://img2.baidu.com/it/u=2571077073,287093969&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
      shortDescription: "国际康复运营专家",
      fullDescription: `Cecelia Xu兼具国际康复医学深厚背景与卓越团队运营能力，现任WIS运营总监。她拥有美国杜肯大学和澳洲邦德大学双硕士学位，在医学交叉领域积累了丰富的项目策划、团队协作与跨学科管理经验。

在WIS，Cecelia不仅全面负责团队的日常运营，更主导团队结构建设与人才发展，牵头制定并不断完善导师选拔、培训和考核机制，确保团队成员持续成长与专业能力提升。她积极推动内部沟通与协作氛围建设，优化工作流程，完善服务标准，建立系统化的项目管理和质量监控体系。通过精细化管理，持续提升团队凝聚力和执行力，为高质量服务交付提供有力保障。

Cecelia始终坚信，强有力的团队管理、完善的制度建设与高效执行力，是保障学员成功、推动团队持续成长的核心动力。`,
      education: "杜肯大学+邦德大学-双硕士",
      experience: "6+ 年运动物理治疗和教育咨询经验",
      expertise: ["国际康复团队运营", "导师培训体系搭建"],
    },
  ];

  const teamDetails_en = [
    {
      name: "Roland Wayne",
      role: "Founder & CEO",
      image:
        "https://img1.baidu.com/it/u=786054042,1849765110&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200",
      shortDescription:
        "Chronic Disease Health Economics Expert | Medical Education Strategist | Global Healthcare Integrator",
      fullDescription: `Roland specializes in health economics research and clinical data modeling for cardiovascular diseases, diabetes, and other chronic conditions, while also serving as an architect, operator, and driving force behind medical B2C service systems. With years of dedication to medical education advancement, he has established a comprehensive personal branding system.

As the team leader, Roland oversees mentor team formation, management, and talent development mechanisms, having independently developed standardized service processes and an intelligent document evaluation system that significantly enhanced service transparency and controllability. He has managed the entire application process for medical bachelor's, master's, and PhD programs, achieving 600+ admissions to top global universities, including consecutive years of successful placements at medical schools in Hong Kong, the UK, and Australia.

In operations and project delivery, Roland established scientific management systems and outcome tracking processes, spearheading internal knowledge base development and application scenario courses. Having authored over 300,000 words of training materials, he leads continuous service optimization, creating an efficient content-community-brand conversion loop. He prioritizes results and user experience, ensuring customized, measurable application and growth paths for each student.

Roland provides comprehensive China market entry support for overseas higher education institutions and private healthcare companies. Leveraging industry insights and multinational project experience, he analyzes China's unique demands and trends, systematically navigating regulations and compliance requirements to develop tailored market entry strategies.

Currently based in Queensland, Australia, Roland actively operates on the frontlines as a clinical researcher, frontline manager, strategic decision-maker, and service provider, coordinating projects and resource integration with a global perspective.`,
      education: "Health Economics and Clinical Data Modeling Direction",
      experience: "15+ years in healthcare consulting and edtech",
      expertise: [
        "Health economics (Cardiovascular/Diabetes)",
        "Medical school application consulting",
        "China market entry strategy",
      ],
    },
    {
      name: "Dr. David Shi",
      role: "Chief Mentor",
      image:
        "https://img0.baidu.com/it/u=2690673028,2887223497&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200",
      shortDescription: "STEM-Medicine Crossover Education Specialist",
      fullDescription: `Dr. David holds a Doctor of Medicine from the University of Queensland and dual bachelor's degrees in Computer Science and Medical Science from the University of Sydney. With core competencies in data analysis and computational modeling, he successfully transitioned to clinical medicine through independent applications, mastering admission processes, exam mechanisms, and interview evaluation systems across English-speaking countries. His unique STEM-medicine interdisciplinary background combines frontline application and teaching experience.

As a senior teaching assistant at the University of Sydney's Computer Science School for five consecutive years, he has instructed 300+ students in operating systems, network principles, and system programming, earning recognition for exceptional communication, teaching, and organizational skills.

His expertise covers Commonwealth medical programs (MBBS/MD) and dentistry (BDS) applications, including foundation+MD pathways, application documentation, entrance exam preparation, structured interview simulations, cross-disciplinary application strategies, medical data analysis, machine learning applications, and overseas adaptation coaching covering cultural understanding and academic etiquette.

Dr. David's logical, concise teaching style helps students identify connections between disparate fields to achieve breakthroughs. Having personally navigated technology-to-clinical transitions, medical school applications from scratch, and transformative failures, he understands both the methodology and emotional journey.`,
      education: "University of Queensland - MD in Clinical Medicine",
      experience: "10+ years in technology and medical education",
      expertise: [
        "MBBS/MD admissions (Commonwealth)",
        "Career switching to medicine",
        "Medical data analytics",
      ],
    },
    {
      name: "Dr. James Liu",
      role: "Chief Academic Advisor",
      image:
        "https://img2.baidu.com/it/u=2875102597,3387218720&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=572",
      shortDescription:
        "Psychology Authority | Oxbridge Admissions Strategist | Mental Health Research Pioneer",
      fullDescription: `Dr. James earned his psychology degrees (BSc to PhD) from top UK universities and completed postdoctoral research at a Chinese national key laboratory, specializing in adolescent mental health, substance dependence, and psychiatric intervention models. He integrates psychological theories with clinical practice, having published multiple first/corresponding-author papers and co-authored an academic monograph.

As Chief Academic Advisor, he possesses complete undergraduate-postgraduate-postdoc application experience, excelling at optimizing application materials and research potential presentation for UK G5 universities. His success stories include triple-tier university applicants achieving G5 offers, along with Oxford and Harvard research master's/PhD admissions.

With SCI paper writing and publication guidance capabilities (as corresponding author), he mentors psychology, psychiatry, rehabilitation medicine, public health, and education applicants. His systemic approach covers research planning, documentation, interview preparation, and long-term development.

Dr. James combines innovative, pragmatic, and empathetic mentoring to enhance both academic outcomes and research capabilities, fostering global perspectives.`,
      education: "Top UK University - BSc, MSc, PhD in Psychology",
      experience: "12+ years in psychological research and education",
      expertise: [
        "Psychology/Psychiatry PhD applications",
        "Non-target to G5 success stories",
        "SCI paper mentoring",
      ],
    },
    {
      name: "Dr. Donald Liu",
      role: "Senior Academic Advisor",
      image:
        "https://img2.baidu.com/it/u=346777935,2381906310&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200",
      shortDescription:
        "Diabetes Clinical Data Scientist | SCI Publication Mentor | UK/EU Medical Admissions Strategist",
      fullDescription: `Dr. Donald, a visiting scholar at Karolinska Institutet and PhD in Cardiovascular Science from University of Glasgow (with MPH from LSHTM), specializes in clinical epidemiological research on diabetes, its complications, and chronic kidney disease. His data-driven approach utilizes multiple databases (CPRD, UK Biobank, Swedish NPR/NDR/PDR) and methodologies including survival analysis, prognostic modeling, nonlinear modeling, competing risk analysis, and meta-analysis.

By April 2025, he had published 9 SCI papers as first/corresponding author (including 1 CAS Q1 journal, IF=9.4), achieving an H-index=6. He's been invited for oral presentations at EASD conferences and received awards including NHS Graham Wilson Travelling Scholarship.

At WIS, he leads research capacity building, developing medical innovation and data analysis systems. His rigorous scientific approach enhances applicants' academic competitiveness, particularly for clinical/research-oriented candidates transitioning fields, significantly improving UK/European health program admission rates. He integrates international research standards into services, providing top-tier academic planning that has secured admissions to UCL, HKU, and University of Edinburgh.`,
      education: "University of Glasgow - PhD in Cardiovascular Science",
      experience: "8+ years in medical research and education",
      expertise: [
        "Diabetes clinical research",
        "Big data modeling",
        "EU/UK research program admissions",
      ],
    },
    {
      name: "Ariel Wu",
      role: "Musculoskeletal Rehabilitation Expert",
      image:
        "https://img2.baidu.com/it/u=2571077073,287093969&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
      shortDescription:
        "MSK Rehab Specialist | UK/HK MSc Admissions Expert | 100% Interview Success",
      fullDescription: `Ariel holds an MSc in Sports Physiotherapy from Hong Kong Polytechnic University and certifications from West China Hospital, having led hundreds of orthopedic rehabilitation cases across Guangdong and Sichuan. With IELTS 7.0 proficiency, she bridges clinical practice and international academic exchange.

As a career development specialist, her "hands-on guidance + professional empathy" approach helps students transform clinical experience into academic potential, creating targeted school selection and application frameworks. She specializes in 1-year UK/HK rehabilitation master's programs, with successful placements at PolyU, CUHK, and UCL.

Her expertise includes musculoskeletal/sports physiotherapy applications, scholarship consultations, personal statement refinement, and interview strategies (maintaining 100% interview success). More than a physiotherapist, she empowers students' transitions from clinicians to internationally competitive healthcare professionals.`,
      education:
        "Hong Kong Polytechnic University - MSc in Sports Physiotherapy",
      experience: "6+ years in sports physiotherapy and educational consulting",
      expertise: [
        "1-year rehab masters (HK/UK)",
        "Musculoskeletal PS optimization",
        "Clinical to research transition",
      ],
    },
    {
      name: "Doris Lau",
      role: "Strategic Planning Director",
      image:
        "https://img2.baidu.com/it/u=2571077073,287093969&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
      shortDescription:
        "Neurorehabilitation Strategist | Dual-MSc Interdisciplinary Mentor | Global Healthcare Integrator",
      fullDescription: `Doris holds dual master's degrees in Brain and Cognitive Science (University of Sydney) and Occupational Therapy (Bond University), combining cutting-edge interdisciplinary research with practical neurorehabilitation expertise.

As WIS Strategic Planning Director, she architects long-term development strategies and core projects, integrating global medical education resources while pushing service boundaries. She established executable project management systems ensuring high-standard delivery. Specializing in China market entry for overseas institutions, she provides regulatory compliance, partnership development, and localization strategies.

Doris believes precise strategy and professional execution are key to collective success.`,
      education: "University of Sydney - MSc in Cognitive Science",
      experience: "6+ years in sports physiotherapy and education consulting",
      expertise: [
        "Sports Physiotherapy",
        "UK Master Applications",
        "Hong Kong Master Applications",
        "Application Documentation",
      ],
    },
    {
      name: "Cecelia Xu",
      role: "Operations Director",
      image:
        "https://img2.baidu.com/it/u=2571077073,287093969&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
      shortDescription:
        "Global Rehab Operations Director | Dual-MSc Team Architect | MedEd Quality Guardian",
      fullDescription: `Cecelia merges international rehabilitation expertise with operational excellence as WIS Operations Director. Her dual master's (Duquesne University and Bond University) informs cross-disciplinary management in medical fields.

She oversees daily operations while building team structures, implementing mentor selection/training mechanisms, optimizing workflows, and establishing quality control systems. Her meticulous management enhances team cohesion and execution power.

Cecelia champions robust team management and institutional systems as the foundation for student and organizational success.`,
      education:
        "Duquesne University + Bond University - Dual Master's Degrees",
      experience: "6+ years in sports physiotherapy and education consulting",
      expertise: ["Cross-border rehab operations", "Mentor training systems"],
    },
  ];

  const team_zh = teamDetails_zh.map((member) => ({
    name: member.name,
    role: member.role,
    image: member.image,
    description: member.shortDescription,
  }));

  const team_en = teamDetails_en.map((member) => ({
    name: member.name,
    role: member.role,
    image: member.image,
    description: member.shortDescription,
  }));

  const handleMemberClick = (member: any) => {
    const currentTeamDetails =
      currentLanguage === "zh" ? teamDetails_zh : teamDetails_en;
    const selectedMemberDetails = currentTeamDetails.find(
      (m) => m.name === member.name
    );
    setSelectedMember(selectedMemberDetails);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  return (
    <div className="about-page" style={{ padding: "120px 0 80px 0" }}>
      {/* About Section */}
      <section
        className="about-section"
        style={{ background: "white", padding: "0px 0" }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className="fw-bold mb-4"
                  style={{ fontSize: "2.5rem", color: "#2c3e50" }}
                >
                  {t("about.title")}
                </h2>

                <div
                  style={{
                    width: 80,
                    height: 4,
                    // background:
                    //   'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: 2,
                    // marginBottom: '2rem',
                  }}
                />
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#6c757d",
                    lineHeight: 1.8,
                    whiteSpace: "pre-line",
                  }}
                >
                  {t("home.about.description")}
                </p>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <img
                  src="https://wis-web.oss-cn-shanghai.aliyuncs.com/about/ba840043365eb52c29741ec9e7cbf82.jpg"
                  alt="About Us"
                  className="img-fluid"
                  style={{ maxHeight: "500px" }}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section py-5">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-5"
          >
            {t("about.meetTeam")}
          </motion.h2>

          {currentLanguage === "zh" ? (
            <Row>
              {team_zh.map((member, index) => (
                <Col md={4} key={index} className="mb-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className="team-card h-100 border-0 shadow-sm"
                      style={{
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        transform: "translateY(0)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(0,0,0,0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)";
                      }}
                      onClick={() => handleMemberClick(member)}
                    >
                      {/* <div
                        className="team-image-container"
                        style={{ border: 'none' }}
                      >
                        <Card.Img
                          variant="top"
                          src={member.image}
                          alt={member.name}
                        />
                      </div> */}
                      <Card.Body className="text-center">
                        <Card.Title className="h5 mb-2">
                          {member.name}
                        </Card.Title>
                        <Card.Text className="text-primary mb-2">
                          {member.role}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          ) : (
            <Row>
              {team_en.map((member, index) => (
                <Col md={4} key={index} className="mb-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className="team-card h-100 border-0 shadow-sm"
                      style={{
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        transform: "translateY(0)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(0,0,0,0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)";
                      }}
                      onClick={() => handleMemberClick(member)}
                    >
                      {/* <div
                        className="team-image-container"
                        style={{ border: 'none' }}
                      >
                        <Card.Img
                          variant="top"
                          src={member.image}
                          alt={member.name}
                        />
                      </div> */}
                      <Card.Body className="text-center">
                        <Card.Title className="h5 mb-2">
                          {member.name}
                        </Card.Title>
                        <Card.Text className="text-primary mb-2">
                          {member.role}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>

      {/* Modal for team member details */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header
          closeButton
          style={{ borderBottom: "none", paddingBottom: "0" }}
        >
          <Modal.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {selectedMember?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "2rem" }}>
          <Row>
            <Col md={4} className="text-center">
              {/* <img
                src={selectedMember?.image}
                alt={selectedMember?.name}
                className="img-fluid rounded mb-3"
                style={{
                  width: '200px',
                  height: '250px',
                  objectFit: 'cover',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
              /> */}
            </Col>
            <Col md={8}>
              <h5 className="text-primary mb-3" style={{ fontWeight: "bold" }}>
                {selectedMember?.role}
              </h5>
              {/* <p
                className="text-muted mb-4"
                style={{ fontSize: "1.1rem", fontStyle: "italic" }}
              >
                {selectedMember?.shortDescription}
              </p> */}

              <div className="mb-4">
                <h6 style={{ fontWeight: "bold", color: "#2c3e50" }}>
                  {currentLanguage === "zh" ? "教育背景" : "Education"}
                </h6>
                <p className="text-muted">{selectedMember?.education}</p>
              </div>

              {/* <div className="mb-4">
                <h6 style={{ fontWeight: "bold", color: "#2c3e50" }}>
                  {currentLanguage === "zh" ? "工作经验" : "Experience"}
                </h6>
                <p className="text-muted">{selectedMember?.experience}</p>
              </div> */}

              <div className="mb-4">
                <h6 style={{ fontWeight: "bold", color: "#2c3e50" }}>
                  {currentLanguage === "zh" ? "专业领域" : "Areas of Expertise"}
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  {selectedMember?.expertise.map((skill: any, index: any) => (
                    <span
                      key={index}
                      className="badge bg-primary"
                      style={{
                        fontSize: "0.8rem",
                        padding: "0.5rem 1rem",
                        borderRadius: "20px",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h6 style={{ fontWeight: "bold", color: "#2c3e50" }}>
                  {currentLanguage === "zh" ? "详细介绍" : "Full Description"}
                </h6>
                <p
                  className="text-muted"
                  style={{
                    lineHeight: "1.8",
                    whiteSpace: "pre-line",
                  }}
                >
                  {selectedMember?.fullDescription}
                </p>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "none", paddingTop: "0" }}>
          <Button
            variant="outline-primary"
            onClick={handleCloseModal}
            style={{
              borderRadius: "25px",
              padding: "0.5rem 2rem",
            }}
          >
            {currentLanguage === "zh" ? "关闭" : "Close"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default About;
