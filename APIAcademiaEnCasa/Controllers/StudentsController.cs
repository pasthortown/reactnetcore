using Microsoft.AspNetCore.Mvc;
using AcademiaEnCasa.Models;
using AcademiaEnCasa.Services;

namespace AcademiaEnCasa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly StudentService _studentService;

        public StudentsController(StudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Student>> GetStudents()
        {
            var students = _studentService.GetStudents();
            return Ok(students);
        }
    }
}
