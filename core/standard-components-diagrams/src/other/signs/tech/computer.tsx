import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPUTER = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.computer;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function Computer(props: DiagramNodeProps) {
  return (
    <Shape {...COMPUTER} {...props} _style={extendStyle(COMPUTER, props)} />
  )
}
