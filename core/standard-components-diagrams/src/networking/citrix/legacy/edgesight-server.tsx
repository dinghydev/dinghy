import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EDGESIGHT_SERVER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.edgesight_server;',
  _width: 76.5,
  _height: 90,
}

export function EdgesightServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...EDGESIGHT_SERVER}
      {...props}
      _style={extendStyle(EDGESIGHT_SERVER, props)}
    />
  )
}
