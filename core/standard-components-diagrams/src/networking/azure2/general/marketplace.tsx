import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MARKETPLACE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Marketplace.svg;strokeColor=none;',
  _width: 56.00000000000001,
  _height: 64,
}

export function Marketplace(props: DiagramNodeProps) {
  return (
    <Shape
      {...MARKETPLACE}
      {...props}
      _style={extendStyle(MARKETPLACE, props)}
    />
  )
}
