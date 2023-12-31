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

        public List<Course> ObtenerCursos()
        {
            return _courses.Find(c => true).ToList();
        }

        public void EliminarCurso(int courseID)
        {
            var filter = Builders<Course>.Filter.Eq("_id", courseID);
            var cursoExistente = _courses.Find(filter).FirstOrDefault();
            if (cursoExistente == null)
            {
                throw new InvalidOperationException($"No se encontró un curso con ID {courseID}.");
            }
            _courses.DeleteOne(filter);
        }

        public void ActualizarCurso(int courseId, Course updatedCourse)
        {
            var filter = Builders<Course>.Filter.Eq("_id", courseId);
            var cursoExistente = _courses.Find(filter).FirstOrDefault();

            if (cursoExistente == null)
            {
                throw new InvalidOperationException($"No se encontró un curso con ID {courseId}.");
            }

            cursoExistente.Name = updatedCourse.Name;
            cursoExistente.Description = updatedCourse.Description;
            cursoExistente.CostPerHour = updatedCourse.CostPerHour;
            cursoExistente.TeacherId = updatedCourse.TeacherId;
            cursoExistente.TeacherEmail = updatedCourse.TeacherEmail;
            cursoExistente.TeacherName = updatedCourse.TeacherName;

            _courses.ReplaceOne(filter, cursoExistente);
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