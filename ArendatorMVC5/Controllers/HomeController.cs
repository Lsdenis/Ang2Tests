using System.Web.Mvc;

namespace ArendatorMVC5.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}