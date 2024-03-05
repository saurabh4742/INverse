import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "./db";
export const CurrentProfile = async () => {
    
  try {
    const user = await currentUser();
    if (user) {
      const profile = await db.profile.findUnique({
        where: {
          userId: user.id,
        },
      });
      if (profile) {
        await db.profile.update({
          where: {
            userId: user.id,
          },
          data: {
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,
          }
        });
        return profile;
      }
      const newProfile = await db.profile.create({
        data: {
          userId: user.id,
          name: `${user.firstName} ${user.lastName}`,
          imageUrl: user.imageUrl,
          email: user.emailAddresses[0].emailAddress,
        },
      });
    }
    redirectToSignIn();
  } catch (error) {
    console.log(error);
  }
};
