import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TICK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.tick',
  },
  _original_width: 85,
  _original_height: 100,
}

export function Tick(props: DiagramNodeProps) {
  return <Shape {...TICK} {...props} _style={extendStyle(TICK, props)} />
}
