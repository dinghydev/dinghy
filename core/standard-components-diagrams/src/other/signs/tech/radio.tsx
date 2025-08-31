import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RADIO = {
  _style:
    'shape=mxgraph.signs.tech.radio;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 56,
}

export function Radio(props: DiagramNodeProps) {
  return <Shape {...RADIO} {...props} _style={extendStyle(RADIO, props)} />
}
