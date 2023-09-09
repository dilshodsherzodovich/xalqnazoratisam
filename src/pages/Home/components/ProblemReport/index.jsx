import Container from "@layouts/Container";
import ReportStatus from "./ReportStatus";
import ChangeableConten from "./ChangeableConten";

function ProblemReport() {
  return (
    <div className="problemReport pt-8">
      <Container>
        <ReportStatus />
        <ChangeableConten />
      </Container>
    </div>
  );
}

export default ProblemReport;
