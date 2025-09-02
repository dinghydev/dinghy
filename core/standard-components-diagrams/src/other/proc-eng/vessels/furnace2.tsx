import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FURNACE2 = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.furnace2;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 80,
  _original_height: 100,
}

export function Furnace2(props: DiagramNodeProps) {
  return (
    <Shape {...FURNACE2} {...props} _style={extendStyle(FURNACE2, props)} />
  )
}
