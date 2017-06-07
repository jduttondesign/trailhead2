using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.ComponentModel.DataAnnotations;

namespace testcapstone.Models
{
    public class NewHike
    {
        [Key]
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public int NumberOfPeople { get; set; }

        public virtual NewHike DuckIAmEating { get; set; }
    }
}