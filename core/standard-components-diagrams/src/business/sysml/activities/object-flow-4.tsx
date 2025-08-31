import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OBJECT_FLOW_4 = {
  _style: 'html=1;shape=mxgraph.sysml.objFlowR;strokeWidth=2;whiteSpace=wrap;',
  _width: 0,
  _height: 60,
}

export function ObjectFlow4(props: DiagramNodeProps) {
  return (
    <Shape
      {...OBJECT_FLOW_4}
      {...props}
      _style={extendStyle(OBJECT_FLOW_4, props)}
    />
  )
}
