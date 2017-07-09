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
            var model = new List<Mobile>()
           {

               new Mobile(){mobileName="ABC",modelId=3939,price=5000,processor="Quadcore-Snapdragon-Processor",approved=false,
               features=new string[]{"2GB RAM", "32GB Memory", "LTE Support"}},

               new Mobile(){mobileName="PQR",modelId=3838,price=6000,processor="OctaCore-Snapdragon-Processor",approved=false,
               features=new string[]{"3GB RAM", "64GB Memory", "LTE Support", "Finger Print Sensor"}}
           };

            return Ok(model);
        }
    }
}   