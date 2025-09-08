import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NEWSVINE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.newsvine;fillColor=#005221;strokeColor=none',
  },
  _original_width: 40.6,
  _original_height: 77.2,
}

export function Newsvine(props: DiagramNodeProps) {
  return (
    <Shape {...NEWSVINE} {...props} _style={extendStyle(NEWSVINE, props)} />
  )
}
