import React, { lazy, Suspense } from 'react';
import './App.css';
import Fallback from './Fallback'
const Header = lazy(() => import('./components/header/Header'));
const Home = lazy(() => import('./components/home/Home'));
const About = lazy(() => import('./components/about/About'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Qualification = lazy(() => import('./components/qualification/Qualification'));
const Work = lazy(() => import('./components/work/Work'));
const Testimonials = lazy(() => import('./components/testimonials/Testimonials'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));
const ScrollUp = lazy(() => import('./components/scrollup/ScrollUp'));
const Services = lazy(() => import('./components/services/Services'));


function App() {
  return (
    <>
      <Suspense fallback={<Fallback/>}><Header /></Suspense>
      <main className="main">
      <Suspense fallback={<Fallback/>}> <Home /></Suspense>
      <Suspense fallback={<Fallback/>}>  <About /></Suspense>
      <Suspense fallback={<Fallback/>}> <Skills /></Suspense>
      <Suspense fallback={<Fallback/>}>  <Services /></Suspense>
      <Suspense fallback={<Fallback/>}> <Qualification /></Suspense>
      <Suspense fallback={<Fallback/>}> <Work /></Suspense>
      <Suspense fallback={<Fallback/>}>   <Testimonials /></Suspense>
      <Suspense fallback={<Fallback/>}>  <Contact /></Suspense>
      </main>
      <Suspense fallback={<Fallback/>}> <Footer /></Suspense>
      <Suspense fallback={<Fallback/>}> <ScrollUp /></Suspense>
    </>
  );
}

export default App;
