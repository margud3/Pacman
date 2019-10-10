using Pacman.Models.Builder.IBuilder;
using Pacman.Models.Product;
using Pacman.Models.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pacman.Models.Builder.ConcreteBuilder
{
    public class MapObjectsBuilder : IMapBuilder
    {
        MapObjects mapObjects = new MapObjects();

        public void AddPlayer(Player[] players)
        {
            mapObjects.players = players;
        }

        public void AddItem(Item[] items)
        {
            mapObjects.items = items;
        }

        public MapObjects GetObjects()
        {
            return mapObjects;
        }
    }
}
