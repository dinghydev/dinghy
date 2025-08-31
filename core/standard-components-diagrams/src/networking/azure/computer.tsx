import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPUTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.computer;pointerEvents=1;',
  },
  _width: 50,
  _height: 45,
}

export function Computer(props: DiagramNodeProps) {
  return (
    <Shape {...COMPUTER} {...props} _style={extendStyle(COMPUTER, props)} />
  )
}
