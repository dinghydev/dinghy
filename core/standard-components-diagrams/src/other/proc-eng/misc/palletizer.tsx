import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PALLETIZER = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.palletizer2;',
  _width: 80,
  _height: 100,
}

export function Palletizer(props: DiagramNodeProps) {
  return (
    <Shape {...PALLETIZER} {...props} _style={extendStyle(PALLETIZER, props)} />
  )
}
