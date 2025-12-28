import { notFound } from 'next/navigation';
import { getCourseBySlug, courses } from '@/lib/data/courses';
import { instituteInfo } from '@/lib/data/institute';
import CourseDetailClient from './CourseDetailClient';

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  
  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }

  return {
    title: `${course.title} - Firewall Zone Institute of IT`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = course.relatedCourses
    ? courses.filter(c => course.relatedCourses?.includes(c.id))
    : courses.filter(c => c.id !== course.id).slice(0, 3);

  return (
    <CourseDetailClient course={course} relatedCourses={relatedCourses} instituteInfo={instituteInfo} />
  );
}
