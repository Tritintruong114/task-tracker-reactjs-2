import { Client, Account, ID, Databases, Storage } from "appwrite";
export const databases = new Databases();
export const client = new Client();
export async function getServerSideProps(context) {
  client
    .setEndpoint(import.meta.env.VITE_PUBLIC_ENDPOINT)
    .setProject(import.meta.env.VITE_PUBLIC_PROJECT);

  const track = await databases.listDocuments(
    import.meta.env.VITE_PUBLIC_DATABASE_ID,
    import.meta.env.VITE_PUBLIC_COLLECTION
  );

  return {
    props: { track },
  };
}
