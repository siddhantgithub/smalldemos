import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import jsPDF from "jspdf";
import { ReactPDF, Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/DocumentScanner'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © Siddhant Tewari '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default function App() {

  const [boxText, setBoxText] = React.useState('Please enter text here');

  const generatePDF = () => {
    var doc = new jsPDF("p", "pt");
    doc.setFontSize(30)
    doc.setTextColor("blue");
    doc.text(100, 50, "Your Document Demo");
    doc.addFont("helvetica", "normal");
    doc.setFontSize(20)
    doc.setTextColor("black");
    doc.text(30, 90, boxText);
    doc.save("demo.pdf");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    generatePDF();
  };

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Text To PDF Converter
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          fullWidth
          rows={4}
          value={boxText}
          sx = {{mt:4}}
          onChange={(event) => {
            setBoxText(event.target.value);
          }}
        />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick = {handleSubmit}
            >
              Download PDF
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>

  );
}
