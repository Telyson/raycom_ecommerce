import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'xxa559k9',
  dataset: 'production',
  apiVersion: '2022-10-10',
  useCdn: true,
  token: 'sk4vdPjAnVNFm1dhnjPJH9xSMMoEeLh5W2YHeAVfAnT89CXeO6sSJkandD2cXuQBg3okA6kJvJCGK9D5bWYpw0LsiO8X5WeZOyzLSdwuEDWYx5xzZwlem3fYyQGc3k062OCrn65Ko7fhTHQYGg4V23mcqvfeociQKeTVxq1O9X9U3lvCqVKO'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);