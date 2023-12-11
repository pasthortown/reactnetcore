namespace APIAcademiaEnCasa.Domain.Entities
{
    public class Course
    {
        public int Id { get; private set; }
        public string Name { get; private set; }
        public string Description { get; private set; }
        public decimal CostPerHour { get; private set; }
        public int TeacherId { get; private set; }
        public string TeacherEmail { get; private set; }
        public string TeacherName { get; private set; }

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