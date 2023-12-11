namespace APIAcademiaEnCasa.Domain.Entities
{
    public class Student
    {
        public int Id { get; private set; }
        public string FullName { get; private set; }
        public string Identification { get; private set; }
        public string PhoneNumber { get; private set; }
        public string Email { get; private set; }
        public string Address { get; private set; }
        
        public Student(
            int id,
            string fullName,
            string identification,
            string phoneNumber,
            string email,
            string address
        )
        {
            Id = id;
            FullName = fullName;
            Identification = identification;
            PhoneNumber = phoneNumber;
            Email = email;
            Address = address;
        }
    }
}