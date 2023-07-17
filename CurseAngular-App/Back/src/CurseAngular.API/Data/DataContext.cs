using Microsoft.EntityFrameworkCore;
using Back.src.CurseAngular.API.Models;

namespace Back.src.CurseAngular.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Evento> Eventos { get; set; }
    }
}