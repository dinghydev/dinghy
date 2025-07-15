import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_CENTER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.dataCenter;strokeColor=#5E5E5E;aspect=fixed;',
  _width: 123,
  _height: 142,
}

export function DataCenter(props: DiagramNodeProps) {
  return <Shape {...DATA_CENTER} {...props} />
}
