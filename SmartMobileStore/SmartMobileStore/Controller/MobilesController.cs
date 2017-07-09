using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using SmartMobileStore.Model;

namespace SmartMobileStore.Controller
{
    public class MobilesController : ApiController
    {
        public IHttpActionResult GetAllMobiles()
        {
            var db = new MobileDb();          

            return Ok(db.Mobiles);
        }
    }
}   