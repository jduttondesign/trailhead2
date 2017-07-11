using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using testcapstone.Models;

namespace testcapstone.Controllers
{

    public class HikeController : ApiController
    {
        ApplicationDbContext db = new ApplicationDbContext();

        [Route("api/hike/")]
        public IEnumerable<Hike> GetAll()
        {
            return db.Hikes;
        }

        [Route("api/hike/")]
        [HttpPost]
        public HttpResponseMessage Post(Hike hike)
        {
            db.Hikes.Add(hike);
            db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK);
        }


        [Route("api/hike/{id}")]
        [HttpGet]
        public HttpResponseMessage Hike(int id)
        {

            var hike = db.Hikes.Find(id);

            return Request.CreateResponse(HttpStatusCode.OK, hike);
            //Console.WriteLine("test");
        }


           
    }




        // [System.Web.Http.HttpDelete, System.Web.Http.Route]
        //public HttpResponseMessage Delete()
        //{

        // return Request.CreateResponse(HttpStatusCode.OK);
        //}

        //[System.Web.Http.HttpPut, System.Web.Http.Route]
        //public HttpResponseMessage Put()
        //{

        //return Request.CreateResponse(HttpStatusCode.OK);//
        //}

    }

