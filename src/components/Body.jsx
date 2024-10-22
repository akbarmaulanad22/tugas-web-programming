import { Route, Routes } from "react-router-dom"
import Sidebar from "./Sidebar"

import Home from "../Pages/Home";
import ProgressResearch from "../Pages/Research/Progress";
import ProgressFormResearch from "../Pages/Research/AddProgress";

import ProposalResearch from "../Pages/Research/Proposal";
import ProposalFormResearch from "../Pages/Research/AddProposal";

import P3mkResearch from "../Pages/Research/P3mk";
import P3mkFormResearch from "../Pages/Research/AddP3mk";

import DesiminationResearch from "../Pages/Research/Desimination";
import DesiminationFormResearch from "../Pages/Research/AddDesimination";

import ReportResearch from "../Pages/Research/Report";
import ReportFormResearch from "../Pages/Research/AddReport";

import ProgressPMK from "../Pages/PMK/Progress";
import ProgressFormPMK from "../Pages/PMK/AddProgress";

import ProposalPMK from "../Pages/PMK/Proposal";
import ProposalFormPMK from "../Pages/PMK/AddProposal";

import P3mkPMK from "../Pages/PMK/P3mk";
import P3mkFormPMK from "../Pages/PMK/AddP3mk";

import DesiminationPMK from "../Pages/PMK/Desimination";
import DesiminationFormPMK from "../Pages/PMK/AddDesimination";

import ReportPMK from "../Pages/PMK/Report";
import ReportFormPMK from "../Pages/PMK/AddReport";

function Body() {
    return (
        <main className="pe-6 h-[80vh]">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-3">
                <Sidebar />
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/research/proposal" element={ <ProposalResearch /> } />
                    <Route path="/research/proposal/add" element={ <ProposalFormResearch /> } />

                    <Route path="/research/reviewP3mk" element={ <P3mkResearch /> } />
                    <Route path="/research/reviewP3mk/add" element={ <P3mkFormResearch /> } />

                    <Route path="/research/progress" element={ <ProgressResearch /> } />
                    <Route path="/research/progress/add" element={ <ProgressFormResearch /> } />

                    <Route path="/research/desimination" element={ <DesiminationResearch /> } />
                    <Route path="/research/desimination/add" element={ <DesiminationFormResearch /> } />

                    <Route path="/research/report" element={ <ReportResearch /> } />
                    <Route path="/research/report/add" element={ <ReportFormResearch /> } />


                    <Route path="/pmk/proposal" element={ <ProposalPMK /> } />
                    <Route path="/pmk/proposal/add" element={ <ProposalFormPMK /> } />

                    <Route path="/pmk/reviewP3mk" element={ <P3mkPMK /> } />
                    <Route path="/pmk/reviewP3mk/add" element={ <P3mkFormPMK /> } />

                    <Route path="/pmk/progress" element={ <ProgressPMK /> } />
                    <Route path="/pmk/progress/add" element={ <ProgressFormPMK /> } />

                    <Route path="/pmk/desimination" element={ <DesiminationPMK /> } />
                    <Route path="/pmk/desimination/add" element={ <DesiminationFormPMK /> } />

                    <Route path="/pmk/report" element={ <ReportPMK /> } />
                    <Route path="/pmk/report/add" element={ <ReportFormPMK /> } />

                </Routes>
            </div>
        </main>
    )
}

export default Body