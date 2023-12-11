using MongoDB.Driver;
using APIAcademiaEnCasa.Domain.Entities;
using APIAcademiaEnCasa.Application.Services;

namespace APIAcademiaEnCasa.Application.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Controlador para gestionar cursos.
    /// </summary>
    /// 
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController: ControllerBase
    {
        private readonly CourseService _courseAppService;

        /// <summary>
        /// Constructor del controlador de cursos.
        /// </summary>
        /// <param name="courseService">Servicio de cursos.</param>
        public CourseController(CourseService courseService)
        {
            _courseAppService = courseService;
        }

        /// <summary>
        /// Crea un nuevo curso.
        /// </summary>
        /// <param name="curso">Datos del curso.</param>
        /// <returns>Resultado de la operación.</returns>
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

        /// <summary>
        /// Obtiene todos los cursos.
        /// </summary>
        /// <returns>Lista de cursos.</returns>
        [HttpGet]
        public IActionResult ObtenerCursos()
        {
            try
            {
                var cursos = _courseAppService.ObtenerCursos();
                return Ok(cursos);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error al obtener los cursos: {ex.Message}");
            }
        }

        /// <summary>
        /// Borra un curso a partir del id
        /// </summary>
        /// <returns>Borrar curso.</returns>
        [HttpDelete("{id}")]
        public IActionResult EliminarCurso(int id)
        {
            try
            {
                _courseAppService.EliminarCurso(id);
                return Ok($"Curso con ID {id} eliminado correctamente.");
            }
            catch (Exception ex)
            {
                return BadRequest($"Error al eliminar el curso: {ex.Message}");
            }
        }

        /// <summary>
        /// Actualiza un curso a partir del id
        /// </summary>
        /// <returns>Actualizar un curso.</returns>
        [HttpPut("{id}")]
        public IActionResult ActualizarCurso(int id, [FromBody] Course updatedCourse)
        {
            try
            {
                _courseAppService.ActualizarCurso(id, updatedCourse);
                return Ok($"Curso con ID {id} actualizado correctamente.");
            }
            catch (InvalidOperationException ex)
            {
                return NotFound($"Error al actualizar el curso: {ex.Message}");
            }
            catch (Exception ex)
            {
                return BadRequest($"Error al actualizar el curso: {ex.Message}");
            }
        }
    }
}