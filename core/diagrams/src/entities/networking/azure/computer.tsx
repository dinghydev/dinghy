import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPUTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.computer;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function Computer(props: DiagramNodeProps) {
  return (
    <Shape {...COMPUTER} {...props} _style={extendStyle(COMPUTER, props)} />
  )
}
