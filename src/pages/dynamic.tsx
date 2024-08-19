import { GetServerSideProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";

interface ApiResponse {
    name: string
    timestamp: Date
}

export const getServerSideProps: GetServerSideProps = async () => {
    const serverSideData: ApiResponse = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())

    return {
        props: {
            serverSideData
        }
    }
}

const Dynamic: NextPage = (props: {
    children?: ReactNode
    serverSideData?: ApiResponse
}) => {
    const [clientSideData, setClientSideData] = useState<ApiResponse>()

    useEffect(() => {
        fetchdata()
    },[])

    const fetchdata = async () => {
        const data = await fetch("/api/hello").then(res => res.json())
        setClientSideData(data)
    }
    return (
        <main className="flex flex-col justify-center items-center h-screen ">
            <h1 className="font-bold">
                Como Funcionam as renderizações do Next.js
            </h1>
            <section className="flex justify-between gap-10 mt-4">
                <div>
                <h2 className="font-semibold">Gerado no servidor:</h2>
                <h3>{props.serverSideData?.timestamp.toString()}</h3>
                </div>
                <div>
                <h2 className="font-semibold">Gerado no cliente:</h2>
                <h3>{clientSideData?.timestamp.toString()}</h3>
                </div>
                
            </section>
        </main>

    )
}

export default Dynamic 