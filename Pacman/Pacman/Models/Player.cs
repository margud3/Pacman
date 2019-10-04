using Pacman.Models.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pacman.Models
{
    public class Player : Entity
    {
        public string name { get; set; }
        public int score { get; set; }
        public double posX { get; set; }
        public double posY { get; set; }
        public bool boosted { get; set; }
        public bool ghost { get; set; }
        //public int? skinId { get; set; }
    }
}
