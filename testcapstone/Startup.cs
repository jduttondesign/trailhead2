using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(testcapstone.Startup))]
namespace testcapstone
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
