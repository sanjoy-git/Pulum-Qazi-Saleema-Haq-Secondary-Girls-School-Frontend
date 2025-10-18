// import * as React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound.js';

import InstituteInfo from './pages/InstituteInfo.js';
import PhotosVideos from './pages/PhotosVideos.js';
import Contacts from './pages/Contacts.js';
import TeachersStaffsCommittee from './pages/TeachersStaffsCommittee.js';
import Notices from './pages/Notices.js';
import Corner from './pages/Corner.js';
import Admin from './pages/Admin.js';
import Results from './pages/Results.js';
import Students from './pages/Students.js';
import { ContextStore } from './database/contextStore.js';
import Library from './pages/Library.js';
import Admission from './pages/Admission.js';
import Magazine from './pages/Magazine.js';
import Store from './pages/Store.js';
import PrivacyPolicy from './pages/PrivacyPolicy.js';
import ToastNotice from './components/ToastNotice.js';
import ClassRoutine from './pages/ClassRoutine.js';
// import { contextProvider } from "./database/contextStore.js"

type Props = {}

export default function App({ }: Props) {
  // const { basicInfo } = React.useContext(contextProvider);

  return (
    <ContextStore>
      <div className=' text-gray-800 dark:text-gray-100'>
        {/* Header */}
        <Navbar />

        {/* Main */}
        <main className=' min-h-60'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/instituteinfo' element={<InstituteInfo />} />
            <Route path='/photosvideos' element={<PhotosVideos />} />
            <Route path='/classroutine' element={<ClassRoutine />} />
            <Route path='/results' element={<Results />} />
            <Route path='/notices' element={<Notices />} />
            <Route path='/library' element={<Library />} />
            <Route path='/corner' element={<Corner />} />
            <Route path='/magazine' element={<Magazine />} />
            <Route path='/store' element={<Store />} />
            <Route path='/teachersstaffscommittee' element={<TeachersStaffsCommittee />} />
            <Route path='/students' element={<Students />} />
            <Route path='/admission' element={<Admission />} />
            <Route path='/login' element={<Admin />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/privacypolicy' element={<PrivacyPolicy />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      <ToastNotice text="আপনাকে আমাদের সাইটে স্বাগতম।"/>
      </div>
    </ContextStore>
  )
}