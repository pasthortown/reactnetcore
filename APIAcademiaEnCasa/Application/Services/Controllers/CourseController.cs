using MongoDB.Driver;
using APIAcademiaEnCasa.Domain.Entities;
using APIAcademiaEnCasa.Application.Services;

namespace APIAcademiaEnCasa.Application.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [ApiController]
    public class CourseController: ControllerBase
    {
        private readonly CourseService _courseAppService;

        public CourseController(CourseService courseService)
        {
            _courseAppService = courseService;
        }

        [HttpPost]
        public IActionResult CrearCurso([FromBody] Course curso)
        {
            try
            {
                _courseAppService.GuardarCurso(curso);
                return Ok("Curso guardado correctamente.");
            }
            catch (Exception ex)
            {
                return BadRequest($"Error al guardar el curso: {ex.Message}");
            }
        }
    }
}