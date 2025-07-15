import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARAMETER_SET_2 = {
  _style:
    'html=1;shape=mxgraph.sysml.paramActSet;align=left;spacingLeft=15;verticalAlign=top;spacingTop=-3;fontStyle=1;',
  _width: 250,
  _height: 120,
}

export function ParameterSet2(props: DiagramNodeProps) {
  return <Shape {...PARAMETER_SET_2} {...props} />
}
