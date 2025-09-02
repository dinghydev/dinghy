import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVIANTART = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.deviantart;fillColor=#009544;strokeColor=none;',
  },
  _original_width: 62,
  _original_height: 86.4,
}

export function Deviantart(props: DiagramNodeProps) {
  return (
    <Shape {...DEVIANTART} {...props} _style={extendStyle(DEVIANTART, props)} />
  )
}
