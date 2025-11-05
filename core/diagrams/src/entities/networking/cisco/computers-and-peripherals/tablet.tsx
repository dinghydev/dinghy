import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLET = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.tablet;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 91,
  _height: 50,
}

export function Tablet(props: NodeProps) {
  return <Shape {...TABLET} {...props} _style={extendStyle(TABLET, props)} />
}
