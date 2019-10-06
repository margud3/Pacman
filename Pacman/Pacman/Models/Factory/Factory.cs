using Pacman.Models.Singleton;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pacman.Models.Factory
{
    public abstract class Factory
    {
        public Item CreateRandomItem()
        {
            Random random = new Random(Math.Abs(Guid.NewGuid().GetHashCode()));
            var posX = random.Next(100);
            var posY = random.Next(100);
            var type = random.Next(10);

            Item item = new Item
            {
                type = type,
                posX = posX,
                posY = posY
            };

            Logger.GetLogger().Log($"Created PowerUp {item.type}");
            return item;
        }

        public Item CreateBiggerFood()
        {
            throw new NotImplementedException();
        }

        public Item CreateTeleportation()
        {
            throw new NotImplementedException();
        }

        public Item CreateBullet()
        {
            throw new NotImplementedException();
        }

        public Item CreateSpeed()
        {
            throw new NotImplementedException();
        }
    }
}
