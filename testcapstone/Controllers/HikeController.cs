using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace testcapstone.Controllers
{
    
    public class HikeController : ApiController
    {
        //[Route("api/hike")]
        //[System.Web.Http.HttpGet, System.Web.Http.Route]
        //public HttpResponseMessage GetAll()
        //{
    
        // return Request.CreateResponse(HttpStatusCode.OK);
        // }
        [Route("api/hike")]
        [HttpPost]
        public HttpResponseMessage Post()
        {

            return Request.CreateResponse(HttpStatusCode.OK);
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
}
