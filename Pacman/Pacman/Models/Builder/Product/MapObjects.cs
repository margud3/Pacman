using Pacman.Models.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pacman.Models.Product
{
    public class MapObjects : Entity
    {
        public Player[] players { get; set; }
        public Item[] items { get; set; }

        public MapObjects()
        {
        }
    }
}
