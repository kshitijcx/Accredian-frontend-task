import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Earnings = () => {
  return (
      <Table className="w-2/4 mx-auto border">
        <TableHeader>
          <TableRow>
            <TableHead>Course</TableHead>
            <TableHead>Referrer Bonus</TableHead>
            <TableHead>Referee Bonus</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Full-Stack Web Development Certification</TableCell>
            <TableCell>7000</TableCell>
            <TableCell>8000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Machine Learning Specialist</TableCell>
            <TableCell>5000</TableCell>
            <TableCell>6000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cybersecurity Professional Certification</TableCell>
            <TableCell>4000</TableCell>
            <TableCell>5000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
  );
};
export default Earnings;
