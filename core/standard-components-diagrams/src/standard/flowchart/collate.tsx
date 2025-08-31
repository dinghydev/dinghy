import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLLATE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.collate;',
  _width: 60,
  _height: 60,
}

export function Collate(props: DiagramNodeProps) {
  return <Shape {...COLLATE} {...props} _style={extendStyle(COLLATE, props)} />
}
