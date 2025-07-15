import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_SERVER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.dataServer;strokeColor=#5E5E5E;aspect=fixed;',
  _width: 123,
  _height: 106,
}

export function DataServer(props: DiagramNodeProps) {
  return <Shape {...DATA_SERVER} {...props} />
}
