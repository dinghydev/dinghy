import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GABBR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.gabbr;fillColor=#F05B1E',
  },
  _original_width: 64.4,
  _original_height: 66,
}

export function Gabbr(props: DiagramNodeProps) {
  return <Shape {...GABBR} {...props} _style={extendStyle(GABBR, props)} />
}
