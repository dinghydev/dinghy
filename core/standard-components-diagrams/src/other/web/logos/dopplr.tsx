import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOPPLR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.dopplr;fillColor=#F9634D;strokeColor=none',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Dopplr(props: DiagramNodeProps) {
  return <Shape {...DOPPLR} {...props} _style={extendStyle(DOPPLR, props)} />
}
