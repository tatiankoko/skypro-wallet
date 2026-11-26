import Calendar from "../calendar/Calendar.jsx";
import Diagram from "../diagram/Diagram.jsx";
import {
    CostAnalysisBlock,
    CostAnalysisContainer,
    CostAnalysisTitle,
    CostAnalysisWrapper
} from "./CostAnalysis.styled.js";

const CostAnalysis = () => {
    return (
        <CostAnalysisWrapper>
            <CostAnalysisContainer>
                <CostAnalysisTitle>Анализ расходов</CostAnalysisTitle>
                <CostAnalysisBlock>
                    <Calendar />
                    <Diagram />
                </CostAnalysisBlock>
            </CostAnalysisContainer>
        </CostAnalysisWrapper>
    );
}

export default CostAnalysis;
