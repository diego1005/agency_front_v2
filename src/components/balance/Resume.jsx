import {Box, Divider, Grid, Paper, Stack, Typography} from '@mui/material'

import {formatTwoDigits} from '../../utils/formatCurrency'

const Resume = ({allData}) => (
  <Grid item xs={5}>
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mb: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Stack direction="row" display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="button">Total Ingresos:</Typography>
        <Typography variant="h6">{allData.totalIncomes}</Typography>
      </Stack>
      <Divider />
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Stack direction="row" display="flex" justifyContent="space-between">
          <span style={{width: '40%'}}>
            <Typography variant="overline">Efectivo:</Typography>
          </span>
          <span style={{width: '30%'}}>
            <Typography
              align="right"
              sx={{display: 'block'}}
              variant="overline"
            >{`${formatTwoDigits((allData.cash / allData.totalIncomes) * 100 || 0)}%`}</Typography>
          </span>
          <span style={{width: '30%'}}>
            <Typography align="right" sx={{display: 'block'}} variant="overline">
              {allData.cash}
            </Typography>
          </span>
        </Stack>
        <Stack direction="row" display="flex" justifyContent="space-between">
          <span style={{width: '40%'}}>
            <Typography variant="overline">Débito:</Typography>
          </span>
          <span style={{width: '30%'}}>
            <Typography
              align="right"
              sx={{display: 'block'}}
              variant="overline"
            >{`${formatTwoDigits((allData.debit / allData.totalIncomes) * 100 || 0)}%`}</Typography>
          </span>
          <span style={{width: '30%'}}>
            <Typography align="right" sx={{display: 'block'}} variant="overline">
              {allData.debit}
            </Typography>
          </span>
        </Stack>
        <Stack direction="row" display="flex" justifyContent="space-between">
          <span style={{width: '40%'}}>
            <Typography variant="overline">Crédito:</Typography>
          </span>
          <span style={{width: '30%'}}>
            <Typography
              align="right"
              sx={{display: 'block'}}
              variant="overline"
            >{`${formatTwoDigits(
              (allData.credit / allData.totalIncomes) * 100 || 0
            )}%`}</Typography>
          </span>
          <span style={{width: '30%'}}>
            <Typography align="right" sx={{display: 'block'}} variant="overline">
              {allData.credit}
            </Typography>
          </span>
        </Stack>
        <Stack direction="row" display="flex" justifyContent="space-between">
          <span style={{width: '40%'}}>
            <Typography variant="overline">Transferencia:</Typography>
          </span>
          <span style={{width: '30%'}}>
            <Typography
              align="right"
              sx={{display: 'block'}}
              variant="overline"
            >{`${formatTwoDigits(
              (allData.transference / allData.totalIncomes) * 100 || 0
            )}%`}</Typography>
          </span>
          <span style={{width: '30%'}}>
            <Typography align="right" sx={{display: 'block'}} variant="overline">
              {allData.transference}
            </Typography>
          </span>
        </Stack>
        <Stack direction="row" display="flex" justifyContent="space-between">
          <span style={{width: '40%'}}>
            <Typography variant="overline">Mercadopago:</Typography>
          </span>
          <span style={{width: '30%'}}>
            <Typography
              align="right"
              sx={{display: 'block'}}
              variant="overline"
            >{`${formatTwoDigits(
              (allData.mercadopago / allData.totalIncomes) * 100 || 0
            )}%`}</Typography>
          </span>
          <span style={{width: '30%'}}>
            <Typography align="right" sx={{display: 'block'}} variant="overline">
              {allData.mercadopago}
            </Typography>
          </span>
        </Stack>
      </Box>
    </Paper>
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mb: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="button">Total Egresos:</Typography>
      <Typography variant="h6">{allData.totalOutcomes}</Typography>
    </Paper>
    <Paper
      sx={{
        p: 2,
        mb: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ebebeb',
      }}
    >
      <Typography variant="button">Resultado:</Typography>
      <Typography variant="h6">
        {Number(allData.totalIncomes) + Number(allData.totalOutcomes)}
      </Typography>
    </Paper>
  </Grid>
)

export default Resume
