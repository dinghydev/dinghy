import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOCK = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.clock;',
  _width: 45,
  _height: 45,
}

export function Clock(props: DiagramNodeProps) {
  return <Shape {...CLOCK} {...props} _style={extendStyle(CLOCK, props)} />
}
