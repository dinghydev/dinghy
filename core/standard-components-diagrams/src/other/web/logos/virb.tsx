import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRB = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.virb;fillColor=#000000;strokeColor=none',
  },
  _original_width: 66,
  _original_height: 70.60000000000001,
}

export function Virb(props: DiagramNodeProps) {
  return <Shape {...VIRB} {...props} _style={extendStyle(VIRB, props)} />
}
