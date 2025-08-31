import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MERCURY = {
  _style:
    'shape=mxgraph.signs.nature.mercury;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 62,
  _height: 99,
}

export function Mercury(props: DiagramNodeProps) {
  return <Shape {...MERCURY} {...props} _style={extendStyle(MERCURY, props)} />
}
