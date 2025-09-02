import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ATHENA = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.athena;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 76.5,
}

export function Athena(props: DiagramNodeProps) {
  return <Shape {...ATHENA} {...props} _style={extendStyle(ATHENA, props)} />
}
