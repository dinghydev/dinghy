import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRINTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.printer;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 91,
  _height: 34,
}

export function Printer(props: DiagramNodeProps) {
  return <Shape {...PRINTER} {...props} _style={extendStyle(PRINTER, props)} />
}
