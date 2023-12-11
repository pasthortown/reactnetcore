using MongoDB.Driver;
using APIAcademiaEnCasa.Domain.Entities;
using APIAcademiaEnCasa.Infrastructure;

namespace APIAcademiaEnCasa.Application.Services
{
    public class CourseService
    {
        private readonly IMongoCollection<Course> _courses;

        public CourseService(MongoDBContext context)
        {
            _courses = context.Courses;
        }

        public void GuardarCurso(Course curso)
        {
            ValidarCurso(curso);
            _courses.InsertOne(curso);
        }

        private void ValidarCurso(Course curso)
        {
            if (curso == null)
            {
                throw new ArgumentNullException(nameof(curso), "El curso no puede ser nulo.");
            }

            if (string.IsNullOrWhiteSpace(curso.Name))
            {
                throw new ArgumentException("El nombre del curso es obligatorio.", nameof(curso.Name));
            }

            if (curso.CostPerHour <= 0)
            {
                throw new ArgumentException("El costo por hora del curso debe ser mayor que cero.", nameof(curso.CostPerHour));
            }
        }
    }
}