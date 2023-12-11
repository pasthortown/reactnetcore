namespace APIAcademiaEnCasa.Domain.Entities
{
    public class Student
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Identification { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        
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