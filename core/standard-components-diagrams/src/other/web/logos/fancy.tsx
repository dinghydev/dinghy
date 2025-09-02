import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FANCY = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.fancy;fillColor=#6DB3E3',
  },
  _original_width: 39.2,
  _original_height: 79,
}

export function Fancy(props: DiagramNodeProps) {
  return <Shape {...FANCY} {...props} _style={extendStyle(FANCY, props)} />
}
