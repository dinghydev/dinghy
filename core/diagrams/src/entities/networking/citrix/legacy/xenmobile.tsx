import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const XENMOBILE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xenmobile;fillColor=#CCCCCC;gradientColor=#000000;gradientDirection=south;',
  },
  _original_width: 70,
  _original_height: 89,
}

export function Xenmobile(props: DiagramNodeProps) {
  return (
    <Shape {...XENMOBILE} {...props} _style={extendStyle(XENMOBILE, props)} />
  )
}
