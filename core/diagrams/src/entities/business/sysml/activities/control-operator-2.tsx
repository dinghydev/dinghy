import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTROL_OPERATOR_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;labelX=135;html=1;overflow=fill;',
  },
  _width: 250,
  _height: 120,
}

export function ControlOperator2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONTROL_OPERATOR_2)} />
}
