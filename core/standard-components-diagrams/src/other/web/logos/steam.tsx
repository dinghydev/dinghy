import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEAM = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.steam;fillColor=#695D5D;gradientColor=#100E0E',
  },
  _original_width: 85.2,
  _original_height: 39.6,
}

export function Steam(props: DiagramNodeProps) {
  return <Shape {...STEAM} {...props} _style={extendStyle(STEAM, props)} />
}
