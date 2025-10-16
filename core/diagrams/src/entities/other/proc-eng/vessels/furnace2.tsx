import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FURNACE2 = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.furnace2;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 80,
  _height: 100,
}

export function Furnace2(props: DiagramNodeProps) {
  return (
    <Shape {...FURNACE2} {...props} _style={extendStyle(FURNACE2, props)} />
  )
}
