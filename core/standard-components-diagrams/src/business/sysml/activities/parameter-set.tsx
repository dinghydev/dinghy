import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARAMETER_SET = {
  _style: 'html=1;shape=mxgraph.sysml.paramSet;whiteSpace=wrap;align=center;',
  _width: 160,
  _height: 100,
}

export function ParameterSet(props: DiagramNodeProps) {
  return <Shape {...PARAMETER_SET} {...props} />
}
