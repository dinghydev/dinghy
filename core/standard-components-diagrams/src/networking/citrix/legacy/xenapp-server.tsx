import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const XENAPP_SERVER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xenapp_server;',
  _width: 76,
  _height: 89,
}

export function XenappServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...XENAPP_SERVER}
      {...props}
      _style={extendStyle(XENAPP_SERVER, props)}
    />
  )
}
