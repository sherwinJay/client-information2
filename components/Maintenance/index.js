import Image from 'next/image';
import { css, cx } from '@emotion/css'
import { maintenanceContainer } from './styles';

const Maintenance = () => {
    return (
        <div className={maintenanceContainer}>
            <Image src="/assets/images/maintenance.svg" width={500} height={300} />
            <p>Work in progress.</p>
        </div>
    )
}

export default Maintenance
