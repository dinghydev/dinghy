import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTROL_OPERATOR_2 = {
  _style:
    'html=1;shape=mxgraph.sysml.package;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;labelX=135;html=1;overflow=fill;',
  _width: 250,
  _height: 120,
}

export function ControlOperator2(props: DiagramNodeProps) {
  return <Shape {...CONTROL_OPERATOR_2} {...props} />
}
