import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_1FTVM = {
  _style:
    'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.1ftvm;',
  _width: 68,
  _height: 62,
}

export function Component1ftvm(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_1FTVM} {...props} />
}
