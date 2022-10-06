import { Avatar, Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image'
import avatar from "../../images/avatar.jpg"
import ReadMore from '../common/header/readmore';


export default function HeroSection() {

	return (
		<Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 7 }}>
			<Container>
				<Stack spacing={4} direction={{ xs: "column-reverse", md: "row" }} alignItems={{ xs: "center", md: "flex- start" }}
					textAlign={{ xs: "center", md: "left" }}
				>
					<Box>
						<Typography mb={{ xs: "3.5", md: "5" }} component="h1" variant="h3" fontWeight="bold">
							Hi, I am Hieu, <br />
							Font-End Developer
						</Typography>
						<ReadMore>
							I am a student majoring in IT at the Ho Chi Minh City University of Foreign Languages and Information Technology - HUFLIT. With the pr
							ofessional knowledge I have gained, I want to work as a front-end intern so that I can make good use of my abilities. Hopefully, the working environment at the company will help me equip myself with more experience and skills to achieve my goal
							of becoming a full-stack developer in the future.
						</ReadMore>

						<Button variant='contained'>
							DownLoad Resume
						</Button>
					</Box>

					<Box

					>

						<Avatar
							sx={{ minWidth: 240, minHeight: 240, boxShadow: "-5px 13px", color: "secondary.light" }}
						>
							<Image src={avatar} layout="intrinsic" alt='avartar' />
						</Avatar>
					</Box>
				</Stack>
			</Container>
		</Box >
	);
}
