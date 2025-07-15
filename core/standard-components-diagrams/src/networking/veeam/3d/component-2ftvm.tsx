import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_2FTVM = {
  _style:
    'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.2ftvm;',
  _width: 68,
  _height: 62,
}

export function Component2ftvm(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_2FTVM} {...props} />
}
