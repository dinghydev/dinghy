import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SLASHDOT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.slashdot;fillColor=#03B2AC;gradientColor=#012C2C',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Slashdot(props: DiagramNodeProps) {
  return (
    <Shape {...SLASHDOT} {...props} _style={extendStyle(SLASHDOT, props)} />
  )
}
