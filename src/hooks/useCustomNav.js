import { useRouter } from "next/navigation";

export default function useCustomNav ({direction, url = ''}) {

  const router = useRouter()
  const template = `router.${direction}()`
  
  return template
}