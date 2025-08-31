import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OBJECT_FLOW_6 = {
  _style: 'html=1;shape=mxgraph.sysml.objFlowR;whiteSpace=wrap;',
  _width: 120,
  _height: 60,
}

export function ObjectFlow6(props: DiagramNodeProps) {
  return (
    <Shape
      {...OBJECT_FLOW_6}
      {...props}
      _style={extendStyle(OBJECT_FLOW_6, props)}
    />
  )
}
