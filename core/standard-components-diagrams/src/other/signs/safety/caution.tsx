import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CAUTION = {
  _style:
    'shape=mxgraph.signs.safety.caution;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function Caution(props: DiagramNodeProps) {
  return <Shape {...CAUTION} {...props} _style={extendStyle(CAUTION, props)} />
}
