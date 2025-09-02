import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRIBBBLE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.dribbble;fillColor=#EB548D',
  },
  _original_width: 67.4,
  _original_height: 67.2,
}

export function Dribbble(props: DiagramNodeProps) {
  return (
    <Shape {...DRIBBBLE} {...props} _style={extendStyle(DRIBBBLE, props)} />
  )
}
