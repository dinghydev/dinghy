import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KAYAK = {
  _style:
    'shape=mxgraph.signs.sports.kayak;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function Kayak(props: DiagramNodeProps) {
  return <Shape {...KAYAK} {...props} _style={extendStyle(KAYAK, props)} />
}
