import Image from 'next/image'
import { loadingPageContainer } from './styles'

const Loading = () => {
    return (
        <div className={loadingPageContainer}>
            <Image 
                src="/assets/images/loading.svg"
                width={280}
                height={280}
              />
              <p>LOADING...</p>
        </div>
    )
}

export default Loading
