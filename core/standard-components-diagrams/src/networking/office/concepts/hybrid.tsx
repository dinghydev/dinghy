import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HYBRID = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.hybrid;',
  _width: 58,
  _height: 52,
}

export function Hybrid(props: DiagramNodeProps) {
  return <Shape {...HYBRID} {...props} _style={extendStyle(HYBRID, props)} />
}
