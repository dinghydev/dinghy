import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const XING = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.xing',
  },
  _original_width: 65,
  _original_height: 73.8,
}

export function Xing(props: DiagramNodeProps) {
  return <Shape {...XING} {...props} _style={extendStyle(XING, props)} />
}
