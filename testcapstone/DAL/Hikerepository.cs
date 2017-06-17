using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using testcapstone.Api.DAL;
using testcapstone.Models;

namespace testcapstone.DAL
{
    public class HikeRepository : IHikeRepository
    {
        readonly AppContext _context;

         HikeRepository(AppContext context)
        {
            _context = context;
        }

        //public void Save(Hike newHike)
        //{
        //    _context.Ducks.Add(newDuck);
        //    _context.SaveChanges();
        //}

        public Hike Get(int id)
        {
            return _context.Hikes.Find(id);
        }

        //public IEnumerable<Duck> GetAll()
        //{
        //    return _context.Ducks;
        //}
    }

}