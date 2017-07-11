using System.Data.Entity;
using testcapstone.Models;

namespace testcapstone.Api.DAL
{
    public class AppContext : ApplicationDbContext
    {

        public DbSet<Hike> Hikes { get; set; }
    }
}