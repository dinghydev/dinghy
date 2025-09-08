import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONTROL_OPERATOR_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;labelX=135;html=1;overflow=fill;',
  },
  _original_width: 250,
  _original_height: 120,
}

export function ControlOperator2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTROL_OPERATOR_2}
      {...props}
      _style={extendStyle(CONTROL_OPERATOR_2, props)}
    />
  )
}
