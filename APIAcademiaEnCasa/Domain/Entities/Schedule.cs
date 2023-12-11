namespace APIAcademiaEnCasa.Domain.Entities
{
    public class Schedule
    {
        public int Id { get; private set; }
        public string ScheduleMode { get; private set; }
        public string ScheduleAddress { get; private set; }
        public int Duration { get; private set; }
        public DateTime ScheduleDateTime { get; private set; }
        public int CourseId { get; private set; }
        public int TeacherId { get; private set; }
        public int StudentId { get; private set; }
        public string CourseName { get; private set; }
        public string CourseDescription { get; private set; }
        public decimal CourseCostPerHour { get; private set; }
        public string TeacherName { get; private set; }
        public string TeacherEmail { get; private set; }
        public string StudentName { get; private set; }
        public string StudentEmail { get; private set; }
        public bool Disabled { get; private set; }

        public Schedule(
            int id,
            string scheduleMode,
            string scheduleAddress,
            int duration,
            DateTime scheduleDateTime,
            int courseId,
            int teacherId,
            int studentId,
            string courseName,
            string courseDescription,
            decimal courseCostPerHour,
            string teacherName,
            string teacherEmail,
            string studentName,
            string studentEmail,
            bool disabled)
        {
            Id = id;
            ScheduleMode = scheduleMode;
            ScheduleAddress = scheduleAddress;
            Duration = duration;
            ScheduleDateTime = scheduleDateTime;
            CourseId = courseId;
            TeacherId = teacherId;
            StudentId = studentId;
            CourseName = courseName;
            CourseDescription = courseDescription;
            CourseCostPerHour = courseCostPerHour;
            TeacherName = teacherName;
            TeacherEmail = teacherEmail;
            StudentName = studentName;
            StudentEmail = studentEmail;
            Disabled = disabled;
        }
    }
}