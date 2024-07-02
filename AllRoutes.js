import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import Loader from "./shade/Loaders/Loaders"; 
 



//Auth
const Auth = React.lazy(() => import("./Authentication/auth"));

// custompages
const Custompages = React.lazy(() =>
  import("../src/shade/layouts/custompages")
);
const Error404 = React.lazy(() => import("./components/404/404Error"));

// main-page
const App = React.lazy(() => import("./App"));
const LandingPage = React.lazy(() =>
  import("./components/LandingPage/LandingPage")
);

//Dashboard
const MainDashboard = React.lazy(() =>
  import("./components/Dashboard/MainDashboard.js")
);

//apa-management
const ApaListView = React.lazy(() =>
  import("./components/ApaManagement/ApaListView/ApaListView")
);
const CreateApaStructure = React.lazy(() =>
  import("./components/ApaManagement/ApaStructure/Create/CreateApaStructure")
);
const UpdateApaStructure = React.lazy(() =>
  import("./components/ApaManagement/ApaStructure/Update/UpdateApaStructure")
);
const CabintePreparation = React.lazy(() =>
  import(
    "./components/ApaManagement/APAInputs/CabintePreparation/CabintePreparation/CabintePreparation"
  )
);
const CheckerPreparation = React.lazy(() =>
  import(
    "./components/ApaManagement/APAInputs/CheckerPreparation/CheckerPreparation/CheckerPreparation"
  )
);
const MakerPreparation = React.lazy(() =>
  import(
    "./components/ApaManagement/APAInputs/MakerPreparation/MakerPreparation/MakerPreparation"
  )
);
const ActivityCategories = React.lazy(() =>
  import("./components/Configuration/ActivityCategories/ActivityCategories")
);
const ActivityCategoriesDevider = React.lazy(() =>
  import(
    "./components/ApaManagement/Categories/ActivityCategoriesDevider/ActivityCategoriesDevider"
  )
);
const FiscalYearAssign = React.lazy(() =>
  import(
    "./components/ApaManagement/FiscalYear/FiscalYearAssign/FiscalYearAssign"
  )
);
const FiscalYear = React.lazy(() =>
  import("./components/ApaManagement/FiscalYear/FiscalYearCreate/FiscalYear")
);
const FinancialYear = React.lazy(() =>
  import("./components/Configuration/FinancialYear/FinancialYear")
);
const MandatoryWeight = React.lazy(() =>
  import("./components/ApaManagement/MandatoryWeight/MandatoryWeight")
);
const APAGuideLine = React.lazy(() =>
  import("./components/ApaManagement/APAGuideLine/APAGuideLine")
);
const APACalendar = React.lazy(() =>
  import("./components/APACalendar/APACalendar")
);

const MakerCheckerCorrection = React.lazy(() =>
  import(
    "./components/ApaManagement/APACorrection/MakerCheckerCorrection/MakerCheckerCorrection"
  )
);
const ApaCorrectionReport = React.lazy(() =>
  import("./components/ApaManagement/APACorrectionReport/ApaCorrectionReport")
);

// apa report

// apa-progress
const MakerApaAchievement = React.lazy(() =>
  import("./components/ApaProgress/Maker/MakerApaAchievement")
);
const CheckerApaAchievement = React.lazy(() =>
  import("./components/ApaProgress/Checker/CheckerApaAchievement ")
);
const ApaAchievementSubmissionReport = React.lazy(() =>
  import(
    "./components/ApaProgress/ApaAchievementSubmissionReport/ApaAchievementSubmissionReport"
  )
);
const ApaAchievementUpdateRequestReport = React.lazy(() =>
  import(
    "./components/ApaProgress/ApaAchievementUpdateRequestReport/ApaAchievementUpdateRequestReport"
  )
);
const ApaAchievementTimeSetting = React.lazy(() =>
  import(
    "./components/ApaProgress/ApaAchievementTimeSetting/ApaAchievementTimeSetting"
  )
);
const AdminAchievementUpdate = React.lazy(() =>
  import("./components/ApaProgress/AdminAchievementUpdate/AdminAchievementUpdate")
);

// subordinate office
const Office = React.lazy(() =>
  import("./components/SubordinateOffice/Office/Office")
);
const OfficeMerge = React.lazy(() =>
  import("./components/SubordinateOffice/OfficeMerge/OfficeMerge")
);
const User = React.lazy(() =>
  import("./components/SubordinateOffice/User/User")
);
const UserMerge = React.lazy(() =>
  import("./components/SubordinateOffice/UserMerge/UserMerge.js")
);

const ApaUpdate = React.lazy(() =>
  import(
    "./components/SubordinateOffice/PreparationUpdateByHigherOffice/ApaUpdateByHigherOffice/ApaUpdate"
  )
);

const AllTypeReports = React.lazy(() =>
  import("./components/SubordinateOffice/AllTypeReports/AllTypeReports")
);
const OwnReports = React.lazy(() =>
  import("./components/SubordinateOffice/OwnReports/OwnReports")
);
const APASubmissionReport = React.lazy(() =>
  import(
    "./components/SubordinateOffice/APASubmissionReport/APASubmissionReport"
  )
);
const APADeterminationTimeSubmission = React.lazy(() =>
  import(
    "./components/SubordinateOffice/APADeterminationTimeSubmission/APADeterminationTimeSubmission"
  )
);
const EditRequest = React.lazy(() =>
  import("./components/SubordinateOffice/ApaEditRequests/EditRequest")
);

const FinalAchievement = React.lazy(() =>
  import("./components/SubordinateOffice/FinalAchievement/FinalAchievement")
);

const Assessment = React.lazy(() =>
  import("./components/SubordinateOffice/Assessment/Assessment")
);

const AssessmentTimeSettings = React.lazy(() =>
  import("./components/SubordinateOffice/Assessment/AssessmentTimeSettings.js")
);

const Audit = React.lazy(() =>
  import("./components/SubordinateOffice/Audit/Audit")
);
const OrganogramWiseReport = React.lazy(() =>
  import(
    "./components/SubordinateOffice/OrganogramWiseReport/OrganogramWiseReport"
  )
);

const ApaCorrectionTimeSetting = React.lazy(() =>
  import(
    "./components/SubordinateOffice/ApaCorrectionTimeSetting/ApaCorrectionTimeSetting"
  )
);

const GoodGovt = React.lazy(() =>
  import(
    "./components/SubordinateOffice/GoodGovt/GoodGovt.js"
  )
);

const WorkplanOverallStatus = React.lazy(() =>
  import("./components/SubordinateOffice/WorkplanOverallStatus/WorkplanOverallStatus.js")
);



// configuration
const Faq = React.lazy(() => import("./components/FAQ/Faq"));
const Hierarchy = React.lazy(() =>
  import("./components/Configuration/Hierarchy/Hierarchy")
);
const APATeam = React.lazy(() => import("./components/Configuration/APATeam/APATeam"));

const MainMenu = React.lazy(() =>
  import("./components/Configuration/Menus/MainMenu/MainMenu")
);
const SubMenu = React.lazy(() =>
  import("./components/Configuration/Menus/SubMenu/SubMenu")
);
const SubsubMenu = React.lazy(() =>
  import("./components/Configuration/Menus/SubsubMenu/SubsubMenu")
);
const Role = React.lazy(() => import("./components/Configuration/Role/Role"));

const JobProfile = React.lazy(() =>
  import("./components/Configuration/JobProfile/JobProfile")
);

const SystemUserProfile = React.lazy(() => import("./components/Configuration/SystemUserProfile/SystemUserProfile.js"));

const AnalyticsDashboard = React.lazy(() =>
  import("./components/Configuration/DashboardSettigns/AnalyticsDashboard.js")
);

const EmailTemplate = React.lazy(() => import("./components/Configuration/EmailTemplate/EmailTemplate.js"));

//masterData
const Layer = React.lazy(() =>
  import("./components/Configuration/Layer/Layer")
);
const Designation = React.lazy(() =>
  import("./components/Configuration/Designation/Designation")
);
const NoticeType = React.lazy(() =>
  import("./components/Configuration/NoticeType/NoticeType")
);
const Toolkit = React.lazy(() =>
  import("./components/Configuration/Toolkit/Toolkit")
);
const Acronyms = React.lazy(() =>
  import("./components/Configuration/Acronyms/Acronyms")
);
const HashTag = React.lazy(() =>
  import("./components/Configuration/HashTag/HashTag.js")
);
const Grades = React.lazy(() =>
  import("./components/Configuration/Grades/Grades.js")
);


// Publication
const Publication = React.lazy(() =>
  import("./components/Publication/Publication")
);
const Notice = React.lazy(() => import("./components/Notice/Notice/Notice"));

const AdditionalInformation = React.lazy(() => import("./components/Notice/AdditionalInformation/AdditionalInformation.js"));


// apa related
const APARelatedTraning = React.lazy(() =>
  import("./components/ApaTraning/RelatedTraning/APARelatedTraning")
);
const APAExpertPool = React.lazy(() =>
  import("./components/ApaTraning/TraningPool/APAExpertPool")
);



// Message
const Message = React.lazy(() =>
  import("./components/Message/Message")
);

//portals
const Portals = React.lazy(() =>
  import("./components/Portals/Portals")
);


// user-profile
const UserProfile = React.lazy(() =>
  import("./components/UserProfile/UserProfile")
);
const MyDrive = React.lazy(() =>
  import("./components/UserProfile/MyDrive")
);


// notifications
const Notifications = React.lazy(() =>
  import("./shade/Notifications/Notifications.js")
);


// system-analyst
const SupersetLoging = React.lazy(() =>
  import("./Authentication/SupersetLoging.js")
);

// test
const Test = React.lazy(() => import("./Test.js"));

const listOfComponent = {
  //dashboard
  MainDashboard: MainDashboard,

  //apa-management
  ApaListView: ApaListView,
  CreateApaStructure: CreateApaStructure,
  UpdateApaStructure: CreateApaStructure,
  CabintePreparation: CabintePreparation,
  CheckerPreparation: CheckerPreparation,
  MakerPreparation: MakerPreparation,
  ActivityCategories: ActivityCategories,
  ActivityCategoriesDevider: ActivityCategoriesDevider,
  FiscalYearAssign: FiscalYearAssign,
  FiscalYear: FiscalYear,
  FinancialYear: FinancialYear,
  MandatoryWeight: MandatoryWeight,
  APAGuideLine: APAGuideLine,
  APACalendar: APACalendar,
  MakerCheckerCorrection: MakerCheckerCorrection,
  ApaCorrectionReport: ApaCorrectionReport,

  // apa-progress
  MakerApaAchievement: MakerApaAchievement,
  CheckerApaAchievement: CheckerApaAchievement,
  ApaAchievementSubmissionReport: ApaAchievementSubmissionReport,
  ApaAchievementUpdateRequestReport: ApaAchievementUpdateRequestReport,
  ApaAchievementTimeSetting: ApaAchievementTimeSetting,
  AdminAchievementUpdate: AdminAchievementUpdate,

  // subordinate-office
  Office: Office,
  OfficeMerge: OfficeMerge,
  User: User,
  UserMerge: UserMerge,
  ApaUpdate: ApaUpdate,
  AllTypeReports: AllTypeReports,
  OwnReports: OwnReports,
  APASubmissionReport: APASubmissionReport,
  APADeterminationTimeSubmission: APADeterminationTimeSubmission,
  EditRequest: EditRequest,
  FinalAchievement: FinalAchievement,
  Assessment: Assessment,
  AssessmentTimeSettings: AssessmentTimeSettings,
  Audit: Audit,
  OrganogramWiseReport: OrganogramWiseReport,
  ApaCorrectionTimeSetting: ApaCorrectionTimeSetting,
  GoodGovt: GoodGovt,
  WorkplanOverallStatus: WorkplanOverallStatus,

  // configuration
  Faq: Faq,
  Hierarchy: Hierarchy,
  APATeam: APATeam,
  MainMenu: MainMenu,
  SubMenu: SubMenu,
  SubsubMenu: SubsubMenu,
  Role: Role,
  Profile: JobProfile,
  SystemUserProfile: SystemUserProfile,
  AnalyticsDashboard: AnalyticsDashboard,
  EmailTemplate: EmailTemplate,

  //master-data
  Layer: Layer,
  Designation: Designation,
  NoticeType: NoticeType,
  Toolkit: Toolkit,
  Acronyms: Acronyms,
  HashTag: HashTag,
  Grades: Grades,

  // Publication
  Publication: Publication,
  Notice: Notice,
  AdditionalInformation: AdditionalInformation,

  // apa-related
  APARelatedTraning: APARelatedTraning,
  APAExpertPool: APAExpertPool,

  // Message
  Message: Message,

  //Portals
  Portals: Portals,

  // user-profile
  UserProfile: UserProfile,

  // system-analyst
  SupersetLoging: SupersetLoging,
};

const AllRoutes = () => {
  let authTokens = localStorage.getItem("access_token")
    ? localStorage.getItem("access_token")
    : null;

  let menuList = JSON.parse(localStorage.getItem("menu_list"));


  let generateDynamicRoute = (item, key) => {
    const Component = listOfComponent[item?.code];
    if (Component) {
      return (
        <Route
          key={key}
          path={item?.url}
          element={<Component permission={item} />}
        />
      );
    }
    return null;
  };

  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        {authTokens ? (
          <Routes>
            <Route path={`/`} element={<App />}>
              <Route index element={<MainDashboard />} />
              <Route
                path={`/apa-structure/create-apa`}
                element={<CreateApaStructure />}
              />
              <Route
                path={`/apamanagement/:strId/cabinte-preaparation/:fiscalYearId`}
                element={<CabintePreparation />}
              />
              <Route
                path={`/apa-structure/:fiscalYear/:name/:id`}
                element={<UpdateApaStructure />}
              />

              <Route
                path={`/apamanagement/fiscal-year-assign`}
                element={<FiscalYearAssign />}
              />

              <Route
                path={`/user-profile/profile`}
                element={<UserProfile />}
              />
              <Route
                path={`/user-profile/my-drive`}
                element={<MyDrive />}
              />
              <Route
                path={`/notifications/:type/:id`}
                element={<Notifications />}
              />


              {menuList?.map((mainMenu, mainIndx) => (
                <React.Fragment key={mainIndx + 1}>
                  {mainMenu?.type === "24" &&
                    generateDynamicRoute(mainMenu, mainIndx)}

                  {mainMenu?.type === "23" &&
                    mainMenu?.submenuList?.map((subMenu, subIndx) => (
                      <React.Fragment key={subIndx + 1}>
                        {subMenu?.type === "24" &&
                          generateDynamicRoute(subMenu, subIndx)}

                        {subMenu?.type === "23" &&
                          subMenu?.subSubMenuList?.map(
                            (subSubMenu, subSubIndx) =>
                              generateDynamicRoute(subSubMenu, subSubIndx)
                          )}
                      </React.Fragment>
                    ))}
                </React.Fragment>
              ))}
            </Route>

            {/*error*/}
            <Route path={`/`} element={<Custompages />}>
              <Route path="*" element={<Error404 />} />
            </Route>

            <Route path="/test" element={<Test />} />
          </Routes>
        ) : (
          <Routes>
            <Route path={`/`} element={<Auth />}>
              <Route index element={<LandingPage />} />
            </Route>
            <Route path={`/`} element={<Custompages />}>
              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
        )}
      </React.Suspense>
    </BrowserRouter>
  );
};

export default AllRoutes;
