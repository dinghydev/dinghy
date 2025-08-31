import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLOCKCHAIN_SERVICE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/blockchain/Azure_Blockchain_Service.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function BlockchainService(props: DiagramNodeProps) {
  return (
    <Shape
      {...BLOCKCHAIN_SERVICE}
      {...props}
      _style={extendStyle(BLOCKCHAIN_SERVICE, props)}
    />
  )
}
