using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pacman.Models.Singleton
{
    public class Logger
    {
        private static readonly Logger _instance = new Logger();

        private string LastLog;

        private Logger()
        {

        }

        public static Logger GetLogger()
        {
            return _instance;
        }

        public static void Error(String text)
        {

        }

        public void Log(String text)
        {
            Console.WriteLine(text);
            this.LastLog = text;
        }

        public string GetLastLog()
        {
            return LastLog;
        }
    }
}
