import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONNECTOR = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.connector;',
  _width: 44,
  _height: 32,
}

export function Connector(props: DiagramNodeProps) {
  return (
    <Shape {...CONNECTOR} {...props} _style={extendStyle(CONNECTOR, props)} />
  )
}
