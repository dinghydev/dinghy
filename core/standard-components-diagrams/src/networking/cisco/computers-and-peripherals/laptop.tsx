import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LAPTOP = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.laptop;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 90,
  _original_height: 61,
}

export function Laptop(props: DiagramNodeProps) {
  return <Shape {...LAPTOP} {...props} _style={extendStyle(LAPTOP, props)} />
}
