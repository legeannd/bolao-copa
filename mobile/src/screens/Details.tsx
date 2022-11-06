import { useRoute } from "@react-navigation/native";
import { useToast, VStack } from "native-base";
import { useEffect, useState } from "react";
import { EmptyMyPoolList } from "../components/EmptyMyPoolList";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { PoolCardProps } from "../components/PoolCard";
import { PoolHeader } from "../components/PoolHeader";
import { api } from "../services/api";

interface RouteParams {
  id: string;
}

export function Details() {
  const [isLoading, setIsLoading] = useState(true)
  const [pollDetails, setPollDetails] = useState<PoolCardProps>()

  const route = useRoute()
  const toast = useToast()
  const { id } = route.params as RouteParams;

  async function fetchPollDetails() {
    try {
      setIsLoading(true)

      const response = await api.get(`/polls/${id}`)
      setPollDetails(response.data.poll)
    } catch (error) {
      console.log(error)

      toast.show({
        title: 'Não foi possível carregar os detalhes do bolão.',
        placement: 'top',
        bgColor: 'red.500'
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPollDetails()
  }, [id])
  

  if (isLoading) {
    return <Loading />
  }

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Título do bolão" showBackButton showShareButton />

      {
        pollDetails._count?.participants > 0 ? 
        <VStack px={5} flex={1}>
          <PoolHeader data={pollDetails} />
        </VStack> : <EmptyMyPoolList code={pollDetails.code}/>
      }
    </VStack>
  )
}