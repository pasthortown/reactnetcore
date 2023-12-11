namespace APIAcademiaEnCasa.Domain.Entities
{
    public class User
    {
        public int Id { get; private set; }
        public string FullName { get; private set; }
        public string Identification { get; private set; }
        public string PhoneNumber { get; private set; }
        public string Email { get; private set; }
        public string Address { get; private set; }
        public int LastCourse { get; private set; }
        public int NextCourse { get; private set; }

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