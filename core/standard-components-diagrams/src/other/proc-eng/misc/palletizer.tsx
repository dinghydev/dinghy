import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PALLETIZER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.palletizer2;',
  },
  _original_width: 80,
  _original_height: 100,
}

export function Palletizer(props: DiagramNodeProps) {
  return (
    <Shape {...PALLETIZER} {...props} _style={extendStyle(PALLETIZER, props)} />
  )
}
