import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLOCKCHAIN_DEVELOPER = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/blockchain/blockchain_developer.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function BlockchainDeveloper(props: DiagramNodeProps) {
  return (
    <Shape
      {...BLOCKCHAIN_DEVELOPER}
      {...props}
      _style={extendStyle(BLOCKCHAIN_DEVELOPER, props)}
    />
  )
}
