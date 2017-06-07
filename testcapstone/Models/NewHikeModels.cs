using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace testcapstone.Models
{
    public class NewHike
    {
        [Key]
        public string Trail { get; set; }

        public int Miles { get; set; }

        public string Terrain { get; set; }

        public string Safety { get; set; }
    }

    public class NewHikeDBContext : DbContext

    {
        public DbSet<NewHike> Trailheadtest { get; set; }
    }
}
