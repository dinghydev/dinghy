import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CAPACITY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.capacity',
  _width: 41,
  _height: 50,
}

export function Capacity(props: DiagramNodeProps) {
  return (
    <Shape {...CAPACITY} {...props} _style={extendStyle(CAPACITY, props)} />
  )
}
