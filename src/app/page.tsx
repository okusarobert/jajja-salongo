import { redirect } from 'next/navigation';

export default function RootPage() {
  console.log("gets to the root page")
  redirect('/en');
}