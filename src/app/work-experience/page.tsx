import Image from "next/image";

export default function WorkingExperience() {
  return (
    <>
      <div className="space-y-2">
        <section className="p-2 pb-6">
          <div className="p-2 mb-2 bg-slate-500 border-l-[10px] border-[#19527C] flex items-baseline justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl">Opendream</h2>
              <h3 className="p-[3px] rounded bg-white text-black">Developer</h3>
            </div>
            <p className="text-sm italic shrink">Jun 2022 - Present</p>
          </div>
          <div className="space-y-2">
            <div>
              <p>
                I started to work here as a backend developer. I then gradually
                worked in fullstack development. The projects that I worked on
                are:
              </p>
              <ul className="text-sm ml-4">
                <li>E-GAT LandAIMS project</li>
                <li>Taejai.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl">E-GAT LandAIMS</h4>
              <div className="flex items-center space-x-4">
                <Image
                  className="w-[100px]"
                  src="./company-logo/egat.png"
                  alt="egat-logo"
                />
                <div className="space-y-2">
                  <p>
                    This project is the system to manage the compensation
                    between E-GAT and other people. The compensation occurs
                    while E-GAT is planning to construct the electrical Line on
                    some land. The system fully manages the process from
                    Cadastral Survey phase to Payment phase.
                  </p>
                  <p>
                    I am responsible for the backend development of this
                    project. Including the development of the API, the database
                    design and performance tuning. I am currently responsible
                    for issue tracking and fixing in both backend and frontend.
                  </p>
                  <div>
                    <h4>Related Technologies</h4>
                    <div className="flex text-xl space-x-2">
                      <span
                        className="icon-[simple-icons--django]"
                        title="Django"
                      ></span>
                      <span
                        className="icon-[simple-icons--oracle]"
                        title="Oracle Database"
                      ></span>
                      <span
                        className="icon-[akar-icons--nextjs-fill]"
                        title="Next.js"
                      ></span>
                      <span
                        className="icon-[simple-icons--gnubash]"
                        title="Bash"
                      ></span>
                      <span
                        className="icon-[simple-icons--docker]"
                        title="Docker"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl">Taejai.com</h4>
              <div className="flex items-center space-x-4">
                <Image
                  className="w-[100px]"
                  src="./company-logo/taejai.svg"
                  alt="taejai-logo"
                />
                <div className="space-y-2">
                  <p>
                    <a href="www.taejai.com" target="_blank">
                      Taejai.com
                    </a>{" "}
                    is the public donation platform.
                  </p>
                  <p>
                    This project is quite an important mark in my career because
                    it is based on the DDD (Domain Driven Design) architecture.
                    I am mainly responsible for the backend development
                    (Donation API) of this project. Including the development of
                    the API, performance tuning and reporting service (Excel
                    exporting).
                  </p>
                  <div>
                    <h4>Related Technologies</h4>
                    <div className="flex text-xl space-x-2">
                      <span
                        className="icon-[fa6-brands--golang]"
                        title="Golang"
                      ></span>
                      <span
                        className="icon-[simple-icons--django]"
                        title="Django"
                      ></span>
                      <span
                        className="icon-[simple-icons--pandas]"
                        title="pandas"
                      ></span>
                      <span
                        className="icon-[simple-icons--postgresql]"
                        title="PostgreSQL"
                      ></span>
                      <span
                        className="icon-[akar-icons--nextjs-fill]"
                        title="Next.js"
                      ></span>
                      <span
                        className="icon-[simple-icons--gnubash]"
                        title="Bash"
                      ></span>
                      <span
                        className="icon-[simple-icons--docker]"
                        title="Docker"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-2 pb-6">
          <div className="p-2 mb-2 bg-slate-500 border-l-[10px] border-[#19527C] flex items-baseline justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl">GBDi</h2>
              <h3 className="p-[3px] rounded bg-white text-black">
                Data Engineer
              </h3>
            </div>
            <p className="text-sm italic shrink">Mar 2020 - Jun 2022</p>
          </div>
          <div className="space-y-2">
            <div>
              <p>
                In GBDi, I am still playing a role of Fullstack Developer plus
                Data Engineer. I have a chance to co-operate with many skillful
                colleges who emerge me to learn more new things. The things, for
                example, I learnt are Python, React, Java, Docker, PowerShell,
                Shell Script, Cloud Service, BitBucket and Cryptography
                technique. I also wrote some articles in{" "}
                <a href="https://bdi.or.th/big-data-bigdata/">bdi.or.th</a>. The
                main project that I worked on are:
              </p>
            </div>
            <div>
              <h4 className="text-xl">Healthlink</h4>
              <div className="flex items-center space-x-4">
                <Image
                  className="w-[100px]"
                  src="./company-logo/healthlink.png"
                  alt="healthlink-logo"
                />
                <div className="space-y-2">
                  <p>
                    This project is the system to manage the personal health
                    data among the cooperation of the hospital and the patient.
                    The benefit of this system is to satisfy the doctors who
                    want to see the patient's health data from the other
                    hospital.
                  </p>

                  <p>
                    In this project, I involved with fullstack development,
                    including backend using FastAPI frontend using React, the
                    database design and the performance tuning.
                  </p>
                  <div>
                    <h4>Related Technologies</h4>
                    <div className="flex text-xl space-x-2">
                      <span
                        className="icon-[simple-icons--fastapi]"
                        title="FastAPI"
                      ></span>
                      <span
                        className="icon-[simple-icons--react]"
                        title="React"
                      ></span>
                      <span
                        className="icon-[simple-icons--postgresql]"
                        title="PostgreSQL"
                      ></span>
                      <span
                        className="icon-[simple-icons--springboot]"
                        title="Spring Boot"
                      ></span>
                      <span
                        className="icon-[healthicons--fhir-logo]"
                        title="HAPI FHIR"
                      ></span>
                      <span
                        className="icon-[simple-icons--gnubash]"
                        title="Bash"
                      ></span>
                      <span
                        className="icon-[simple-icons--jenkins]"
                        title="Jenkins"
                      ></span>
                      <span
                        className="icon-[simple-icons--portainer]"
                        title="Portainer"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-2 pb-6">
          <div className="p-2 mb-2 bg-slate-500 border-l-[10px] border-[#19527C] flex items-baseline justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl">I AM Consulting Group</h2>
              <h3 className="p-[3px] rounded bg-white text-black">
                IT Consultant (Developer)
              </h3>
            </div>
            <p className="text-sm italic shrink">Oct 2016 - Feb 2020</p>
          </div>
          <div className="space-y-2">
            <div>
              <p>
                I worked in I AM Consulting Group as a developer. The projects
                that I involved with are:
              </p>
              <ul className="text-sm ml-4">
                <li>PG (Bangkok Airways), AD/ID Project</li>
                <li>SCG (Siam Cement Group), V Project</li>
                <li>Thailand Post, Asset Management Project</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl">PG (Bangkok Airways), AD/ID Project</h4>
              <div className="flex items-center space-x-4">
                <Image
                  className="w-[100px]"
                  src="./company-logo/pg.svg"
                  alt="pg-logo"
                />
                <div className="space-y-2">
                  <p>
                    In this project, I learned about Cordys System which is the
                    product sold by I AM consulting. I wrote the Javascript to
                    manipulate the UI.
                  </p>
                  <div>
                    <h4>Related Technologies</h4>
                    <div className="flex text-xl space-x-2">
                      <span
                        className="icon-[simple-icons--javascript]"
                        title="JavaScript"
                      ></span>
                      <span
                        className="icon-[simple-icons--microsoftsqlserver]"
                        title="Microsoft SQL Server"
                      ></span>
                      <span
                        className="icon-[simple-icons--opentext]"
                        title="Opentext Cordys"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl">SCG (Siam Cement Group), V Project</h4>
              <div className="flex items-center space-x-4">
                <Image
                  className="w-[100px]"
                  src="./company-logo/scg.png"
                  alt="scg-logo"
                />
                <div className="space-y-2">
                  <p>
                    This project is the solution named Q2O, Quotation to Order.
                    I mainly implemented the <em>Smart Contract</em> section. I
                    used ANTLR library to write the new Grammar Q2OLang to
                    extract the custom interpolation in Contract content, get
                    the Parsed Tree and regenerate them as AngularJS Component.
                    Other responsibilities in this project were Validate the
                    Input data by Business Logic, construct the Cordys Workflow
                    and maintain some Database Tables.
                  </p>
                  <div>
                    <h4>Related Technologies</h4>
                    <div className="flex text-xl space-x-2">
                      <span
                        className="icon-[akar-icons--angular-fill]"
                        title="AngularJS"
                      ></span>
                      <span
                        className="icon-[simple-icons--dotnet]"
                        title=".NET Framework"
                      ></span>
                      <span
                        className="icon-[simple-icons--microsoftsqlserver]"
                        title="Microsoft SQL Server"
                      ></span>
                      <span
                        className="icon-[simple-icons--opentext]"
                        title="Opentext Cordys"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl">
                Thailand Post, Asset Management Project
              </h4>
              <div className="flex items-center space-x-4">
                <Image
                  className="w-[100px]"
                  src="./company-logo/thailand-post.png"
                  alt="thailand-post-logo"
                />
                <div className="space-y-2">
                  <p>
                    This project is the system about Asset Management which
                    users can create/modify Asset Document. It had itself
                    workflow system. In this project, I started to implement the
                    real usage of Angular 6 technology with many third parties
                    NPM packages; for example, Bootstrap, lodash, momentjs and
                    numeral. I also implement the Backend tier using ASP.NET MVC
                    5 and Oracle Database.
                  </p>
                  <div>
                    <h4>Related Technologies</h4>
                    <div className="flex text-xl space-x-2">
                      <span
                        className="icon-[akar-icons--angular-fill]"
                        title="Angular"
                      ></span>
                      <span
                        className="icon-[simple-icons--dotnet]"
                        title=".NET Framework"
                      ></span>
                      <span
                        className="icon-[simple-icons--oracle]"
                        title="Oracle Database"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-2 pb-6">
          <div className="p-2 mb-2 bg-slate-500 border-l-[10px] border-[#19527C] flex items-baseline justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl">Advanced Systems Consulting</h2>
              <h3 className="p-[3px] rounded bg-white text-black">
                Programmer (Contract)
              </h3>
            </div>
            <p className="text-sm italic shrink">Mar 2016 - Sep 2016</p>
          </div>
          <div className="space-y-2">
            <div>
              <p>
                Outsourcing Programmer at DTAC site Here I worked as a
                hiring-contract employee. My responsibilities included
                RBHDashboard and Cluster KPI Dashboard (partial) which is the
                web to monitor KPI.
              </p>
            </div>
            <div>
              <h4 className="text-xl">RBHDashboard</h4>
              <div className="flex items-center space-x-4">
                <Image
                  className="w-[100px] h-[100px]"
                  src="./company-logo/dtac.svg"
                  alt="dtac-logo"
                />
                <div className="space-y-2">
                  <p>
                    I use technologies ASP.Net (MVC5) C# and NuGet Packages to
                    write Web Service (REST and SOAP), MS Unit Test,
                    HighChartsJS, GoogleMap API, Bootstrap, AngularJS and MSSQL
                    2014. I also learned about SVG Manipulation and CSScript.
                  </p>

                  <div>
                    <h4>Related Technologies</h4>
                    <div className="flex text-xl space-x-2">
                      <span
                        className="icon-[simple-icons--dotnet]"
                        title=".NET Framework ASP.NET (MVC5)"
                      ></span>
                      <span
                        className="icon-[simple-icons--microsoftsqlserver]"
                        title="Microsoft SQL Server"
                      ></span>
                      <span
                        className="icon-[akar-icons--angular-fill]"
                        title="AngularJS"
                      ></span>
                      <span
                        className="icon-[simple-icons--googlemaps]"
                        title="Google Map API"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-2 pb-6">
          <div className="p-2 mb-2 bg-slate-500 border-l-[10px] border-[#19527C] flex items-baseline justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl">Infinite Computing Systems</h2>
              <h3 className="p-[3px] rounded bg-white text-black">
                Programmer (Contract)
              </h3>
            </div>
            <p className="text-sm italic shrink">Oct 2015 - Mar 2016</p>
          </div>
          <div className="space-y-2">
            <div>
              <h4 className="text-xl">REFLEX</h4>
              <div className="flex items-center space-x-4">
                <Image className="w-[100px]" src="./company-logo/chevron.svg" alt="chevron-logo"/>
                <div className="space-y-2">
                  <p>
                    The client of this job was Chevron (Thailand). This project
                    REFLEX (Reliability & Efficiency Loss Event Tracking System)
                    is about the system to track the Loss at onshore. I
                    temporarily worked with Indian PM and remotely Indian
                    Developers.
                  </p>
                  <p>
                    My responsibilities were maintenance and adding features to
                    legacy system, using ASP.NET MVC (VB) as a core platform,
                    manipulating Microsoft SQL Server 2014 (Business Layer Logic
                    mainly reside in Stored Procedures), making use of Telerik
                    Kendo UI and Interact with TFS (Team Foundation Server) as a
                    Source Control. I also write the code to connect to GPDA Web
                    Service (Authentication purpose) and partially analyze the
                    users requirement and solve the issues, sometime communicate
                    with the user to clear the Business Rules.
                  </p>
                  <div>
                    <h4>Related Technologies</h4>
                    <div className="flex text-xl space-x-2">
                      <span
                        className="icon-[simple-icons--dotnet]"
                        title=".NET Framework"
                      ></span>
                      <span
                        className="icon-[simple-icons--microsoftsqlserver]"
                        title="Microsoft SQL Server"
                      ></span>
                      <span
                        className="icon-[simple-icons--visualstudio]"
                        title="Microsoft TFS"
                      ></span>
                      <span
                        className="icon-[simple-icons--progress]"
                        title="Telerik Kendo UI"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-2 pb-6">
          <div className="p-2 mb-2 bg-slate-500 border-l-[10px] border-[#19527C] flex items-baseline justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl">RingZero Networks</h2>
              <h3 className="p-[3px] rounded bg-white text-black">Developer</h3>
            </div>
            <p className="text-sm italic shrink">Apr 2015 - Oct 2015</p>
          </div>
          <div className="space-y-2">
            <div>
              <h4 className="text-xl">Share Builder Plan (SBP)</h4>
              <div className="flex items-center space-x-4">
                <Image
                  className="w-[100px]"
                  src="./company-logo/phillip.jpeg"
                  alt="phillip-logo"
                />
                <div className="space-y-2">
                  <p>
                    For this job, I was outsourced to be Developer at Phillip
                    Securities (Thailand). In this company, I worked in SBP
                    (Share Builder Plan) project.
                  </p>
                  <p>
                    My Responsibilities are mainly Continue development in
                    AccountInvestment module, Change Prededuct module, convert
                    existing overall classic ASP.NET Website Project to Web
                    Application Project and using ASP.Net (Web Application) C#
                    as a core technology. I used several related technologies,
                    for example, RDLC Report, NPOI (to output Excel files) ,
                    Entity Framework 6 mixing with existing in-house libraries,
                    Microsoft SQL Server 2005 (Business Layer Logic mainly
                    reside in Stored Procedures and Triggers), jQuery / jQueryUI
                    and HTML5
                  </p>
                  <div>
                    <h4>Related Technologies</h4>
                    <div className="flex text-xl space-x-2">
                      <span
                        className="icon-[simple-icons--dotnet]"
                        title=".NET Framework"
                      ></span>
                      <span
                        className="icon-[simple-icons--microsoftsqlserver]"
                        title="Microsoft SQL Server"
                      ></span>
                      <span
                        className="icon-[simple-icons--jquery]"
                        title="jQuery"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-2 pb-6">
          <div className="p-2 mb-2 bg-slate-500 border-l-[10px] border-[#19527C] flex items-baseline justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl">Nagase (Thailand)</h2>
              <h3 className="p-[3px] rounded bg-white text-black">
                IT Developer
              </h3>
            </div>
            <p className="text-sm italic shrink">Dec 2013 - Apr 2015</p>
          </div>
          <div className="flex items-center space-x-4">
            <Image className="w-[100px]" src="./company-logo/nagase.jpeg" alt="nagase-logo" />
            <div className="space-y-2">
              <p>
                I worked as a permanent employee in this company. There are
                several projects that I did. Shortly said: Internal Web
                Application. In this place, I learned many things by myself and
                some courses. I began to accumulate the knowledge about
                programming when I worked here such as the technologies of
                ASP.Net (MVC5) C# and related things.
              </p>
              <div>
                <h4>Related Technologies</h4>
                <div className="flex text-xl space-x-2">
                  <span
                    className="icon-[simple-icons--dotnet]"
                    title=".NET Framework"
                  ></span>
                  <span
                    className="icon-[simple-icons--microsoftsqlserver]"
                    title="Microsoft SQL Server"
                  ></span>
                  <span
                    className="icon-[simple-icons--subversion]"
                    title="Subversion"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-2 pb-6">
          <div className="p-2 mb-2 bg-slate-500 border-l-[10px] border-[#19527C] flex items-baseline justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl">AppliCAD</h2>
              <h3 className="p-[3px] rounded bg-white text-black">
                SolidWorks EPDM API / SolidWorks API Programmer
              </h3>
            </div>
            <p className="text-sm italic shrink">May 2013 - Nov 2013</p>
          </div>
          <div className="flex items-center space-x-4">
            <Image className="w-[100px]" src="./company-logo/applicad.jpeg" alt="applicad-logo" />
            <div className="space-y-2">
              <p>
                In this company, I started my new career path as a programmer. I
                learned about the fundamental of SolidWork (CAD) software, C#
                language and SolidWork API. I compose many macros by using C#
                and SolidWork API together. These things are like the plugins of
                SolidWork.
              </p>
              <div>
                <h4>Related Technologies</h4>
                <div className="flex text-xl space-x-2">
                  <span
                    className="icon-[simple-icons--dassaultsystemes]"
                    title="SolidWork"
                  ></span>
                  <span
                    className="icon-[simple-icons--dotnet]"
                    title=".NET Framework"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-2 pb-6">
          <div className="p-2 mb-2 bg-slate-500 border-l-[10px] border-[#19527C] flex items-baseline justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl">Siam Inter Mold</h2>
              <h3 className="p-[3px] rounded bg-white text-black">
                Milling CNC Machine Operator
              </h3>
            </div>
            <p className="text-sm italic shrink">Jan 2012 - Apr 2013</p>
          </div>
          <div className="flex items-center space-x-4">
            <Image className="w-[100px]" src="./company-logo/sim.jpeg" alt="sim-logo" />
            <div className="space-y-2">
              <p>
                In this company, I began to work as CNC Machine Operator. My
                duties were:
              </p>
              <ul className="text-sm ml-4 list-disc">
                <li>Setting up the workpiece into the machine</li>
                <li>Loading the tools into the CNC machine</li>
                <li>Running the CNC G-Code program</li>
                <li>Maintaining the machine daily</li>
              </ul>
              <p>
                For a while, I was promoted to be the CAD designer. Started to
                use VISI software to make the coolant holes, hot runner and
                chill vents corresponding with 2D drawing. I also learned a lot
                about diecasting mold here.
              </p>
            </div>
          </div>
        </section>
        <section className="p-2 pb-6">
          <div className="p-2 mb-2 bg-slate-500 border-l-[10px] border-[#19527C] flex items-baseline justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl">Samui Aksorn</h2>
              <h3 className="p-[3px] rounded bg-white text-black">
                Customer Coordinator
              </h3>
            </div>
            <p className="text-sm italic shrink">??? - Dec 2011</p>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              className="w-[100px]"
              src="./company-logo/samui-aksorn.jpeg"
              alt="samui-aksorn-logo"
            />
            <div className="space-y-2">
              <p>TODO: write about this JD</p>
            </div>
          </div>
        </section>
        <section className="p-2 pb-6">
          <div className="p-2 mb-2 bg-slate-500 border-l-[10px] border-[#19527C] flex items-baseline justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl">SJ Supply</h2>
              <h3 className="p-[3px] rounded bg-white text-black">
                Mold Fitter
              </h3>
            </div>
            <p className="text-sm italic shrink">??? - ???</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="space-y-2">
              <p>TODO: write about this JD</p>
            </div>
          </div>
        </section>
        <section className="p-2 pb-6">
          <div className="p-2 mb-2 bg-slate-500 border-l-[10px] border-[#19527C] flex items-baseline justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl">Creation Bijoux</h2>
              <h3 className="p-[3px] rounded bg-white text-black">
                Customer Coordinator
              </h3>
            </div>
            <p className="text-sm italic shrink">??? - ???</p>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              className="w-[100px]"
              src="./company-logo/creation-bijoux.jpeg"
              alt="creation-bijoux-logo"
            />
            <div className="space-y-2">
              <p>TODO: write about this JD</p>
            </div>
          </div>
        </section>
        <section className="p-2 pb-6">
          <div className="p-2 mb-2 bg-slate-500 border-l-[10px] border-[#19527C] flex items-baseline justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl">Grand Watergate Hotel</h2>
              <h3 className="p-[3px] rounded bg-white text-black">
                Front Reception
              </h3>
            </div>
            <p className="text-sm italic shrink">??? - ???</p>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              className="w-[100px]"
              src="./company-logo/grand-watergate-hotel.jpeg"
              alt="grand-watergate-hotel-logo"
            />
            <div className="space-y-2">
              <p>
                This is the first place that I am working as a full-time
                employee.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center text-sm pt-2 pb-2">
        All trademarks, logos and brand names are the property of their
        respective owners.
      </div>
    </>
  );
}
