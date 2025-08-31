import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const XENDESKTOP_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xendesktop_server;',
  },
  _width: 75,
  _height: 91,
}

export function XendesktopServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...XENDESKTOP_SERVER}
      {...props}
      _style={extendStyle(XENDESKTOP_SERVER, props)}
    />
  )
}
