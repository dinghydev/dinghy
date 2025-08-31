import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONE_ADJUSTABLE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.cone2;dx=0.5;dy=0.9;',
  _width: 60,
  _height: 60,
}

export function ConeAdjustable(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONE_ADJUSTABLE}
      {...props}
      _style={extendStyle(CONE_ADJUSTABLE, props)}
    />
  )
}
