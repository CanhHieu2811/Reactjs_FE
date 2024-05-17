import { Container, Grid } from '@mui/material';

export default function TrangChuTemplates() {
  return (
    <Container style={{ height: 'auto', padding: '20px 0' }}>
      <Grid
        container
        sx={{
          p: 2,
          margin: 'auto',
        }}
        justifyContent="center"
      >
        Trang chủ
      </Grid>
    </Container>
  );
}
