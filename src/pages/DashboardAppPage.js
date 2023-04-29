import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';

import {
  SubscribersPercentage,
  StudentSubscriptions,
  AppWidgetSummary,
  CoursesByState,
  SubscribersState,
} from '../sections/@dashboard/app';

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Muralis Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="inscritos hoje" total={11} icon={'ant-design:rise'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Inscritos esta semana" total={77} icon={'ant-design:rise'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Inscritos este mês" total={321} icon={'ant-design:rise'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total de inscritos(1.278)" total={1278} color="info" icon={'ant-design:user'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <StudentSubscriptions
              title="Inscritos"
              subheader="(+43%) que o ano passado"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Matemática',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Letras',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Geografia',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <SubscribersPercentage
              title="Porcentagem de ingressantes por curso"
              chartData={[
                { label: 'Matemática', value: 4344 },
                { label: 'Letras', value: 5435 },
                { label: 'Geografia', value: 1443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <SubscribersState
              title="Estado dos ingressantes"
              subheader="(+35%) que o ano passado"
              chartData={[
                { label: 'São Paulo', value: 400 },
                { label: 'Rio de Janeiro', value: 430 },
                { label: 'Minas Gerais', value: 448 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CoursesByState
              title="Relação de curso por estado"
              chartLabels={['Matemática', 'Letras', 'Geografia', ]}
              chartData={[
                { name: 'São Paulo', data: [500, 400, 303] },
                { name: 'Rio de Janeiro', data: [350, 210, 350] },
                { name: 'Minas Gerais', data: [44, 446, 558] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
