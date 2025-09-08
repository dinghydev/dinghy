import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LAPTOP_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.laptop_2;',
  },
  _original_width: 116,
  _original_height: 86.5,
}

export function Laptop2(props: DiagramNodeProps) {
  return (
    <Shape {...LAPTOP_2} {...props} _style={extendStyle(LAPTOP_2, props)} />
  )
}
