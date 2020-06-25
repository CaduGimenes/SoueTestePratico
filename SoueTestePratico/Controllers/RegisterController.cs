using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SoueTestePratico.Models;

namespace SoueTestePratico.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly db_soueContext _context;

        public RegisterController(db_soueContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Login>> GetRegister(int id)
        {
            var login = await _context.Login.FindAsync(id);

            if (login == null)
            {
                return NotFound();
            }

            return login;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult<Login>> PostRegister([FromBody]Login login)
        {

            if(_context.Login.Where(x => x.Cpf == login.Cpf).Count() > 0)
            {
                return BadRequest(new { message = "Usuário já existe" });
            }
            
            _context.Login.Add(login);
            await _context.SaveChangesAsync();
                        
            return CreatedAtAction("GetRegister", new { id = login.Id }, login);
        }
    }
}