// sanjoy-git
import * as React from 'react';
import { HomeSlider } from '../components/Sliders.js';
import { Skeleton, SkeletonLine } from 'keep-react';
import Container from '../components/Container.js';
import PersonSpeech from '../components/PersonSpeech.js';
import { contextProvider } from '../database/contextStore.js';
import PhotosVideos from './PhotosVideos.js';
import Contacts from './Contacts.js';
import InstituteInfo from './InstituteInfo.js';
import Corner from './Corner.js';
import Notices from './Notices.js';
import PageTitle from '../components/PageTitle.js';
import { NavLink } from 'react-router';


function Home() {
  const { basicInfo, teachersStaffsCommittee, students } = React.useContext(contextProvider);

  return (
    <div className=' mt-1 text-xl'>

      {/* HomeSlider section */}
      <section className=''>
        {
          basicInfo?.instituteHomeSlidersUrls ? <HomeSlider sliders={basicInfo.instituteHomeSlidersUrls} /> :
            <Skeleton className=" my-1">
              <SkeletonLine className="h-52" />
            </Skeleton>
        }
      </section>

      {/* Notices section*/}
      <Notices />

      {/* TeachersStaffsCommittee & Students home nav button */}
      <Container>
        <div className='flex justify-around items-center flex-wrap'>
          {/* Teachers home nav profile pic btn */}
          <NavLink className="flex flex-col items-center justify-center" to="/teachersstaffscommittee">
            <div>

              {
                teachersStaffsCommittee?.assistantTeachers ?
                  <div className=' -space-x-5 cursor-pointer'>
                    {
                      teachersStaffsCommittee.assistantTeachers[0]?.profilePhoto ?
                        <img className=' w-12 h-12 overflow-hidden rounded-full inline-block' src={`https://lh3.google.com/u/0/d/${teachersStaffsCommittee.assistantTeachers[0]?.profilePhoto?.split("id=")?.[1]}`} alt="Profile photo" /> :
                        <img className=' w-12 h-12 overflow-hidden rounded-full inline-block' src="./avater.png" alt="Profile photo" />
                    }
                    {
                      teachersStaffsCommittee.assistantTeachers[1]?.profilePhoto ?
                        <img className=' w-12 h-12 overflow-hidden rounded-full inline-block' src={`https://lh3.google.com/u/0/d/${teachersStaffsCommittee.assistantTeachers[1]?.profilePhoto?.split("id=")?.[1]}`} alt="Profile photo" /> :
                        <img className=' w-12 h-12 overflow-hidden rounded-full inline-block' src="./avater.png" alt="Profile photo" />
                    }
                    {
                      teachersStaffsCommittee.assistantTeachers[2]?.profilePhoto ?
                        <img className=' w-12 h-12 overflow-hidden rounded-full inline-block' src={`https://lh3.google.com/u/0/d/${teachersStaffsCommittee.assistantTeachers[2]?.profilePhoto?.split("id=")?.[1]}`} alt="Profile photo" /> :
                        <img className=' w-12 h-12 overflow-hidden rounded-full inline-block' src="./avater.png" alt="Profile photo" />
                    }
                  </div> :
                  <Skeleton className='-space-x-2'>
                    <SkeletonLine className='inline-block w-12 h-12 rounded-full' />
                    <SkeletonLine className='inline-block w-12 h-12 rounded-full' />
                    <SkeletonLine className='inline-block w-12 h-12 rounded-full' />
                  </Skeleton>
              }
            </div>
            <span className=' text-xl font-serif'>Teachers</span>
          </NavLink>
          {/* Students home nav profile pic btn */}
          <NavLink  className="flex flex-col items-center justify-center" to="/students">
            <div>
              {
                students?.classOld10 ?
                  <div className=' -space-x-5 cursor-pointer'>
                    {
                      students.classOld10[0]?.profilePhoto ?
                        <img className=' w-12 h-12 overflow-hidden rounded-full inline-block' src={`https://lh3.google.com/u/0/d/${students.classOld10[0]?.profilePhoto?.split("id=")?.[1]}`} alt="Profile photo" /> :
                        <img className=' w-12 h-12 overflow-hidden rounded-full inline-block' src="./avater.png" alt="Profile photo" />
                    }
                    {
                      students.classOld10[1]?.profilePhoto ?
                        <img className=' w-12 h-12 overflow-hidden rounded-full inline-block' src={`https://lh3.google.com/u/0/d/${students.classOld10[1]?.profilePhoto?.split("id=")?.[1]}`} alt="Profile photo" /> :
                        <img className=' w-12 h-12 overflow-hidden rounded-full inline-block' src="./avater.png" alt="Profile photo" />
                    }
                    {
                      students.classOld10[2]?.profilePhoto ?
                        <img className=' w-12 h-12 overflow-hidden rounded-full inline-block' src={`https://lh3.google.com/u/0/d/${students.classOld10[2]?.profilePhoto?.split("id=")?.[1]}`} alt="Profile photo" /> :
                        <img className=' w-12 h-12 overflow-hidden rounded-full inline-block' src="./avater.png" alt="Profile photo" />
                    }
                  </div> :
                  <Skeleton className='-space-x-2'>
                    <SkeletonLine className='inline-block w-12 h-12 rounded-full' />
                    <SkeletonLine className='inline-block w-12 h-12 rounded-full' />
                    <SkeletonLine className='inline-block w-12 h-12 rounded-full' />
                  </Skeleton>
              }
            </div>
            <span className=' text-xl font-serif'>Students</span>
          </NavLink>
        </div>
      </Container>

      {/*Institute description section */}
      <InstituteInfo />

      {/* Head teacher & speech section*/}
      <Container>
        <PageTitle title='Head Teacher' />
        {
          basicInfo?.instituteHeadTeacher ? <PersonSpeech person={basicInfo.instituteHeadTeacher} /> :
            <Skeleton className="">
              <SkeletonLine className="h-16 w-16 rounded-full" />
              <SkeletonLine className="h-6 mt-2" />
              <SkeletonLine className="h-5 mt-2" />
            </Skeleton>
        }
      </Container>

      {/* Sovapoti & speech section*/}
      {/* <Container>
        <PageTitle title='Head Teacher' />
        {
          basicInfo?.instituteHeadTeacher ? <PersonSpeech person={basicInfo.instituteSavapati} /> :
            <Skeleton className="">
              <SkeletonLine className="h-16 w-16 rounded-full" />
              <SkeletonLine className="h-6 mt-2" />
              <SkeletonLine className="h-5 mt-2" />
            </Skeleton>
        }
      </Container> */}


      {/* Photos and videos section */}
      <PhotosVideos />

      {/* Corner photos & videos section*/}
      <Corner />


      {/* Contacts & Google Map section*/}
      <Contacts />

    </div>
  );
}


export default Home;