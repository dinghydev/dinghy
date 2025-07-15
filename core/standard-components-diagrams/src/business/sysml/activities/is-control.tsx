import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IS_CONTROL = {
  _style: 'html=1;shape=mxgraph.sysml.isControl;whiteSpace=wrap;align=center;',
  _width: 300,
  _height: 60,
}

export function IsControl(props: DiagramNodeProps) {
  return <Shape {...IS_CONTROL} {...props} />
}
