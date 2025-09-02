import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SONICO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.sonico;fillColor=#01AEF0;strokeColor=none',
  },
  _original_width: 69.2,
  _original_height: 63.2,
}

export function Sonico(props: DiagramNodeProps) {
  return <Shape {...SONICO} {...props} _style={extendStyle(SONICO, props)} />
}
