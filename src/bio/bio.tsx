import * as React from 'react';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';

export const Bio: React.FC = () => (
  <Container maxWidth="md" className="Bio-container">
    <Paper>Mika bio</Paper>
  </Container>
);

export default Bio;