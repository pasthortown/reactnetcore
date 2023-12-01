using System.Collections.Generic;
using AcademiaEnCasa.Models;

namespace AcademiaEnCasa.Services
{
    public class StudentService
    {
        public List<Student> GetStudents()
        {
            // En un escenario real, obtendrías datos de una base de datos.
            // Aquí, usaremos una lista estática para simplificar el ejemplo.
            return new List<Student>
            {
                new Student { Id = 1, Name = "Estudiante1" },
                new Student { Id = 2, Name = "Estudiante2" },
                // Agrega más estudiantes según sea necesario...
            };
        }
    }
}
