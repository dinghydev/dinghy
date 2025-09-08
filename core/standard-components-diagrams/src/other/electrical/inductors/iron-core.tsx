import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IRON_CORE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.iron_core;',
  },
  _original_width: 64,
  _original_height: 4,
}

export function IronCore(props: DiagramNodeProps) {
  return (
    <Shape {...IRON_CORE} {...props} _style={extendStyle(IRON_CORE, props)} />
  )
}
