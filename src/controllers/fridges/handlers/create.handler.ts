
import { RequestContext } from "@mikro-orm/core";
import { FridgeBody } from "../../../contracts/fridge.body";
import { Fridge } from "../../../entities/fridge.entity";


export const create = async (body: FridgeBody) => {
   
  const em = RequestContext.getEntityManager();
  const fridge = em.create(Fridge, body);
  await em.persistAndFlush(fridge);

  return fridge;
};

