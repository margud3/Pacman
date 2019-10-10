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
            foreach(Player player in players)
            {
              mapObjects.player = player;
            }
        }

        public void AddItem(Item[] items)
        {
          foreach(Item item in items)
          {
            mapObjects.items = item;
          }
        }

        public MapObjects GetObjects()
        {
            return mapObjects;
        }
    }
}
