import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TWO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.two;fillColor=#FF6D00;strokeColor=none',
  },
  _original_width: 75.4,
  _original_height: 20,
}

export function Two(props: DiagramNodeProps) {
  return <Shape {...TWO} {...props} _style={extendStyle(TWO, props)} />
}
