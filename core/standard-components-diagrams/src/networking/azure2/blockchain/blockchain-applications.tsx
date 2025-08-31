import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLOCKCHAIN_APPLICATIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/blockchain/Blockchain_Applications.svg;strokeColor=none;',
  },
  _width: 48.4,
  _height: 68,
}

export function BlockchainApplications(props: DiagramNodeProps) {
  return (
    <Shape
      {...BLOCKCHAIN_APPLICATIONS}
      {...props}
      _style={extendStyle(BLOCKCHAIN_APPLICATIONS, props)}
    />
  )
}
