namespace APIAcademiaEnCasa.Domain.Entities
{
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal CostPerHour { get; set; }
        public int TeacherId { get; set; }
        public string TeacherEmail { get; set; }
        public string TeacherName { get; set; }

        public Course(int id, string name, string description, decimal costPerHour, int teacherId, string teacherEmail, string teacherName)
        {
            Id = id;
            Name = name;
            Description = description;
            CostPerHour = costPerHour;
            TeacherId = teacherId;
            TeacherEmail = teacherEmail;
            TeacherName = teacherName;
        }
    }
}