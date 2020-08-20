using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Cosmos.Table;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using RestSharp;
using TinifyAPI;

namespace Api.Controllers
{
    [ApiController]
    [Route("api")]
    public class Controller : ControllerBase
    {
        [HttpGet("returnHello")]
        public string ReturnHello()
        {
            return "Hello World! This API is working :) v2";
        }

        [HttpGet("courses")]
        public string GetCourses()
        { 
            var client = new RestClient("https://sidvwebsitestorage.blob.core.windows.net/websitedata/courses.json");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);
            //Console.WriteLine(response.Content);
            Console.WriteLine("Returning courses...");
            JToken json = JToken.Parse(response.Content);
            return json.ToString();  
        }

        [HttpGet("experience")]
        public string GetExperience()
        {
            var client = new RestClient("https://sidvwebsitestorage.blob.core.windows.net/websitedata/experience.json");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);
            //Console.WriteLine(response.Content);
            Console.WriteLine("Returning experience...");
            JToken json = JToken.Parse(response.Content);
            return json.ToString();
        }

        [HttpGet("projects")]
        public string GetProjects()
        {
            var client = new RestClient("https://sidvwebsitestorage.blob.core.windows.net/websitedata/projects.json");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);
            //Console.WriteLine(response.Content);
            Console.WriteLine("Returning projects...");
            JToken json = JToken.Parse(response.Content);
            return json.ToString();
        }

        [HttpGet("teaching")]
        public string GetTeaching()
        {
            var client = new RestClient("https://sidvwebsitestorage.blob.core.windows.net/websitedata/teaching.json");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);
            //Console.WriteLine(response.Content);
            Console.WriteLine("Returning teaching...");
            JToken json = JToken.Parse(response.Content);
            return json.ToString();
        }

        [HttpGet("gallery")]
        public string GetGallery()
        {
            var client = new RestClient("https://sidvwebsitestorage.blob.core.windows.net/websitedata/gallery.json");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);
            //Console.WriteLine(response.Content);
            Console.WriteLine("Returning gallery pics...");
            JToken json = JToken.Parse(response.Content);
            return json.ToString();
        }

        [HttpGet("carousel")]
        public string GetCarousel()
        {
            var client = new RestClient("https://sidvwebsitestorage.blob.core.windows.net/websitedata/gallery.json");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);
            //Console.WriteLine(response.Content);
            Console.WriteLine("Returning carousel pics...");
            JToken json = JToken.Parse(response.Content);
            return json.ToString();
        }

        /*
        [HttpGet("tinifyimage")]
        public async void GetTinifyImage(string name)
        {
            Tinify.Key = "yFd23Nxh511QgrCBd68SvYKt3rxG0vjB";
            name = "https://sidvwebsitestorage.blob.core.windows.net/websitegallery/pic1.JPG";
            var source = Tinify.FromUrl(name);
            Console.WriteLine(System.IO.Path.GetFileName(name));
            await source.ToFile("optimized/pic1.jpg");
            Console.WriteLine("returning tiny");
        }
        */

    }
}