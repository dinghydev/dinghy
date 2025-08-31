import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MARKETPLACE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Store_Marketplace.svg;strokeColor=none;',
  _width: 44,
  _height: 50,
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
