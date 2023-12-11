namespace APIAcademiaEnCasa.Domain.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Identification { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public int LastCourse { get; set; }
        public int NextCourse { get; set; }

        public User(
            int id,
            string fullName,
            string identification,
            string phoneNumber,
            string email,
            string address,
            int lastCourse,
            int nextCourse)
        {
            Id = id;
            FullName = fullName;
            Identification = identification;
            PhoneNumber = phoneNumber;
            Email = email;
            Address = address;
            LastCourse = lastCourse;
            NextCourse = nextCourse;
        }
    }
}