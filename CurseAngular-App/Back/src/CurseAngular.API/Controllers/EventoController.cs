using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CurseAngular.Persistence;
using CurseAngular.Domain;

namespace Back.src.CurseAngular.API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class EventosController : ControllerBase
    {        
        private readonly CurseAngularContext _context;
      
        public EventosController(CurseAngularContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _context.Eventos;
        }
        [HttpGet("{id}")]
        public Evento GetById(int id)
        {
            return _context.Eventos.FirstOrDefault(
                evento => evento.EventoId == id
            );
        }
        [HttpPost]
        public string Post()
        {
            return "Exemplo de Post";
        }
    }
}
