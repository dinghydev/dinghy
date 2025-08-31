import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETLOG = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.netlog;fillColor=#F42424;strokeColor=none',
  },
  _width: 76.60000000000001,
  _height: 68.8,
}

export function Netlog(props: DiagramNodeProps) {
  return <Shape {...NETLOG} {...props} _style={extendStyle(NETLOG, props)} />
}
