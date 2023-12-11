namespace APIAcademiaEnCasa.Domain.Entities
{
    public class Schedule
    {
        public int Id { get; set; }
        public string ScheduleMode { get; set; }
        public string ScheduleAddress { get; set; }
        public int Duration { get; set; }
        public DateTime ScheduleDateTime { get; set; }
        public int CourseId { get; set; }
        public int TeacherId { get; set; }
        public int StudentId { get; set; }
        public string CourseName { get; set; }
        public string CourseDescription { get; set; }
        public decimal CourseCostPerHour { get; set; }
        public string TeacherName { get; set; }
        public string TeacherEmail { get; set; }
        public string StudentName { get; set; }
        public string StudentEmail { get; set; }
        public bool Disabled { get; set; }

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