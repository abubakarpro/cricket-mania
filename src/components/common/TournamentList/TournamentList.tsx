import { Grid } from "@mui/material";
import TournamentCard from "../TournamentCard/TournamentCard";

// interface Tournament {
//   id: string;
//   image: any;
//   date: string;
//   title: string;
//   teams: string;
//   location: string;
//   time: string;
//   prize: string;
// }

interface TournamentListProps {
  tournaments: TornamentState[];
}

const TournamentList = ({ tournaments }: TournamentListProps) => {
  return (
    <Grid container spacing={3}>
      {tournaments.map((tournament) => (
        <Grid item xs={12} sm={6} md={6} key={tournament.id}>
          <TournamentCard tournament={tournament} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TournamentList;
