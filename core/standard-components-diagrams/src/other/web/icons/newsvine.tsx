import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEWSVINE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.newsvine;fillColor=#008733;gradientColor=#00441B',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Newsvine(props: DiagramNodeProps) {
  return (
    <Shape {...NEWSVINE} {...props} _style={extendStyle(NEWSVINE, props)} />
  )
}
