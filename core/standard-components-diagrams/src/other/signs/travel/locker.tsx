import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCKER = {
  _style:
    'shape=mxgraph.signs.travel.locker;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 78,
  _height: 99,
}

export function Locker(props: DiagramNodeProps) {
  return <Shape {...LOCKER} {...props} _style={extendStyle(LOCKER, props)} />
}
