import { sanityClient } from '../lib/sanity';
import { content } from '../lib/content';

async function run() {
  await sanityClient.createOrReplace({ _id: 'mission', _type: 'mission', title: content.mission.title, content: content.mission.body });
  await sanityClient.createOrReplace({ _id: 'vision', _type: 'vision', title: content.vision.title, content: content.vision.body });
  await sanityClient.createOrReplace({ _id: 'presidentWord', _type: 'presidentWord', title: content.presidentWord.title, content: content.presidentWord.body });
  await sanityClient.createOrReplace({ _id: 'about', _type: 'about', title: content.about.title, content: content.about.body });
  console.log('Seeded content');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
