import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SLASHDOT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.slashdot;fillColor=#026664;strokeColor=none',
  },
  _original_width: 52.400000000000006,
  _original_height: 62,
}

export function Slashdot(props: DiagramNodeProps) {
  return (
    <Shape {...SLASHDOT} {...props} _style={extendStyle(SLASHDOT, props)} />
  )
}
