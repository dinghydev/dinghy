import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BLOCKCHAIN_SERVICE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/blockchain/Azure_Blockchain_Service.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function BlockchainService(props: DiagramNodeProps) {
  return <Shape {...BLOCKCHAIN_SERVICE} {...props} />
}
