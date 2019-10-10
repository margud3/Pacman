using Pacman.Models.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Pacman.Models.Product;

namespace Pacman.Models.Builder.IBuilder
{
    interface IMapBuilder
    {
        void AddPlayer(Player[] players);
        void AddItem(Item[] items);

        MapObjects GetObjects();
    }
}
