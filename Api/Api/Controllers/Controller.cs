using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using RestSharp;
using Microsoft.Extensions.Caching.Memory;
using TinifyAPI;

namespace Api.Controllers
{
    [ApiController]
    [Route("api")]
    public class Controller : ControllerBase
    {
        private readonly RestClient _client;
        private readonly IMemoryCache _cache;
        private const string BaseUrl = "https://sidvwebsitestorage.blob.core.windows.net/websitedata/";
        private const int CacheExpirationMinutes = 60; // Adjust as needed

        public Controller(IMemoryCache cache)
        {
            _cache = cache;
            _client = new RestClient(BaseUrl);
            _client.Timeout = -1;
        }

        private async Task<string> GetJsonFromBlobAsync(string path, string cacheKey)
        {
            if (_cache.TryGetValue(cacheKey, out string cachedResponse))
            {
                return cachedResponse;
            }

            var request = new RestRequest(path, Method.GET);
            var response = await _client.ExecuteAsync(request);
            var result = JToken.Parse(response.Content).ToString();
            
            var cacheOptions = new MemoryCacheEntryOptions()
                .SetAbsoluteExpiration(TimeSpan.FromMinutes(CacheExpirationMinutes));
            _cache.Set(cacheKey, result, cacheOptions);
            
            return result;
        }

        [HttpGet("returnHello")]
        public string ReturnHello()
        {
            return "Hello World! This API is working :) v3";
        }

        [HttpGet("courses")]
        public async Task<string> GetCourses()
        {
            return await GetJsonFromBlobAsync("courses.json", "courses");
        }

        [HttpGet("experience")]
        public async Task<string> GetExperience()
        {
            return await GetJsonFromBlobAsync("experience.json", "experience");
        }

        [HttpGet("projects")]
        public async Task<string> GetProjects()
        {
            return await GetJsonFromBlobAsync("projects.json", "projects");
        }

        [HttpGet("teaching")]
        public async Task<string> GetTeaching()
        {
            return await GetJsonFromBlobAsync("teaching.json", "teaching");
        }

        [HttpGet("gallery")]
        public async Task<string> GetGallery()
        {
            return await GetJsonFromBlobAsync("gallery.json", "gallery");
        }

        [HttpGet("carousel")]
        public async Task<string> GetCarousel()
        {
            return await GetJsonFromBlobAsync("carousel.json", "carousel");
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