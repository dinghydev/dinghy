import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SLASHDOT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.slashdot;fillColor=#026664;strokeColor=none',
  },
  _width: 52.400000000000006,
  _height: 62,
}

export function Slashdot(props: DiagramNodeProps) {
  return (
    <Shape {...SLASHDOT} {...props} _style={extendStyle(SLASHDOT, props)} />
  )
}
