import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JBOD = {
  _style:
    'shape=mxgraph.cisco.misc.jbod;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 29,
  _height: 62,
}

export function Jbod(props: DiagramNodeProps) {
  return <Shape {...JBOD} {...props} _style={extendStyle(JBOD, props)} />
}
