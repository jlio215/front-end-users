import { Row, Col } from "reactstrap";
import UsersTable from "../src/components/dashboard/UsersTable";

const UsersList = () => {
  return (
    <Row>
      <Col lg="12">
        <UsersTable />
      </Col>
    </Row>
  );
};

export default UsersList;
