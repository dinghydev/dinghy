import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEVIANTART = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.deviantart;fillColor=#009544;strokeColor=none;',
  },
  _width: 62,
  _height: 86.4,
}

export function Deviantart(props: DiagramNodeProps) {
  return (
    <Shape {...DEVIANTART} {...props} _style={extendStyle(DEVIANTART, props)} />
  )
}
