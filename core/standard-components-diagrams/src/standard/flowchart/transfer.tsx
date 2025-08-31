import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSFER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;strokeWidth=2;shape=mxgraph.arrows2.arrow;dy=0.6;dx=40;notch=0;',
  },
  _width: 100,
  _height: 70,
}

export function Transfer(props: DiagramNodeProps) {
  return (
    <Shape {...TRANSFER} {...props} _style={extendStyle(TRANSFER, props)} />
  )
}
