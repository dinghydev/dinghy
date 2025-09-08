import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const XANGA = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.xanga;fillColor=#000000;strokeColor=none',
  },
  _original_width: 70,
  _original_height: 38,
}

export function Xanga(props: DiagramNodeProps) {
  return <Shape {...XANGA} {...props} _style={extendStyle(XANGA, props)} />
}
