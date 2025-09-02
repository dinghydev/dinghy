import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PINTEREST = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.pinterest;fillColor=#BD081C;strokeColor=none',
  },
  _original_width: 76.80000000000001,
  _original_height: 74.4,
}

export function Pinterest(props: DiagramNodeProps) {
  return (
    <Shape {...PINTEREST} {...props} _style={extendStyle(PINTEREST, props)} />
  )
}
