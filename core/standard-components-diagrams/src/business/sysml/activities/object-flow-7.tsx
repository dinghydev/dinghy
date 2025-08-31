import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OBJECT_FLOW_7 = {
  _style: 'html=1;shape=mxgraph.sysml.objFlowL;whiteSpace=wrap;',
  _width: 120,
  _height: 60,
}

export function ObjectFlow7(props: DiagramNodeProps) {
  return (
    <Shape
      {...OBJECT_FLOW_7}
      {...props}
      _style={extendStyle(OBJECT_FLOW_7, props)}
    />
  )
}
