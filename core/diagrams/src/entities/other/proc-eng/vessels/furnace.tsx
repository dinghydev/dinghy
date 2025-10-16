import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FURNACE = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.furnace;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 80,
  _original_height: 99,
}

export function Furnace(props: DiagramNodeProps) {
  return <Shape {...FURNACE} {...props} _style={extendStyle(FURNACE, props)} />
}
