import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.dataServer;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _width: 123,
  _height: 106,
}

export function DataServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_SERVER}
      {...props}
      _style={extendStyle(DATA_SERVER, props)}
    />
  )
}
