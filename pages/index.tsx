import React from 'react'
import Head from 'next/head'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import {
	useUser,
	useSession,
	useSupabaseClient,
} from '@supabase/auth-helpers-react'
import 'react-datepicker/dist/react-datepicker.css'

import Footer from '../components/Footer'

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import Switch from '@mui/material/Switch';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chart from '../components/dashboard_components/Chart';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const switch_label = { inputProps: { 'aria-label': 'Switch label!' } };

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: 'center',
	color: theme.palette.text.secondary,
	height: 200,
	lineHeight: '200px',
}));

export default function Home() {
	const user = useUser()
	const session = useSession()
	const supabase = useSupabaseClient()

	return (
		<div>
			<Head>
				<title>Elisa Laittenetti Control</title>
				<meta name="description" content="Expense tracker" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
				<h1>Elisa Laittenetti Control</h1>
				{!session ? (
					<Auth
						supabaseClient={supabase}
						appearance={{ theme: ThemeSupa }}
						theme="dark"
					/>
				) : (
					<>
						<Box sx={{ flexGrow: 1 }}>
							<AppBar position="static">
								<Toolbar>
									<NavigateBeforeIcon />
									<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
										Mökki
									</Typography>
									<NavigateNextIcon />
								</Toolbar>
							</AppBar>
							<div>
								<Accordion>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header"
									>
										<Card sx={{ minWidth: 275 }}>
											<CardContent>
												<Typography variant="h5" component="div">
													Sauna
												</Typography>
												<Typography sx={{ mb: 1.5 }} color="text.secondary">
													22ºC
												</Typography>
												<Switch {...switch_label} defaultChecked />
											</CardContent>
										</Card>
									</AccordionSummary>
									<AccordionDetails>

										<Grid item xs={12} md={8} lg={9}>
											<Paper
												sx={{
													p: 2,
													display: 'flex',
													flexDirection: 'column',
													height: 240,
												}}
											>
												<Chart />
											</Paper>
										</Grid>
									</AccordionDetails>
								</Accordion>
								<Accordion>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel2a-content"
										id="panel2a-header"
									>
										<Card sx={{ minWidth: 275 }}>
											<CardContent>
												<Typography variant="h5" component="div">
													Heater
												</Typography>
												<Typography sx={{ mb: 1.5 }} color="text.secondary">
													19ºC
												</Typography>
												<Switch {...switch_label} defaultChecked />
											</CardContent>
										</Card>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
											malesuada lacus ex, sit amet blandit leo lobortis eget.
										</Typography>
									</AccordionDetails>
								</Accordion>
							</div>
						</Box>
					</>
				)}
			</main>
			<Footer />
		</div>
	)
}
