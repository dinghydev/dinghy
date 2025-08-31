import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GUARD = {
  _style:
    'shape=mxgraph.cisco.security.guard;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 88,
  _height: 54,
}

export function Guard(props: DiagramNodeProps) {
  return <Shape {...GUARD} {...props} _style={extendStyle(GUARD, props)} />
}
