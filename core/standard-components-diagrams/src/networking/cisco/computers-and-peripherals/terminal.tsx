import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TERMINAL = {
  _style:
    'shape=mxgraph.cisco.computers_and_peripherals.terminal;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 61,
  _height: 54,
}

export function Terminal(props: DiagramNodeProps) {
  return (
    <Shape {...TERMINAL} {...props} _style={extendStyle(TERMINAL, props)} />
  )
}
