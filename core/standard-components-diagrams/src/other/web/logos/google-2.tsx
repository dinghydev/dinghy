import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GOOGLE_2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.google_plus;fillColor=#DD4C40;strokeColor=none',
  },
  _original_width: 65.60000000000001,
  _original_height: 44,
}

export function Google2(props: DiagramNodeProps) {
  return (
    <Shape {...GOOGLE_2} {...props} _style={extendStyle(GOOGLE_2, props)} />
  )
}
