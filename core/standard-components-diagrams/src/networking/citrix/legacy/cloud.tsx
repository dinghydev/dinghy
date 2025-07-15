import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.cloud;',
  _width: 95,
  _height: 62,
}

export function Cloud(props: DiagramNodeProps) {
  return <Shape {...CLOUD} {...props} />
}
