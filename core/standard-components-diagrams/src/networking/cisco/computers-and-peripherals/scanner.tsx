import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCANNER = {
  _style:
    'shape=mxgraph.cisco.computers_and_peripherals.scanner;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 80,
  _height: 75,
}

export function Scanner(props: DiagramNodeProps) {
  return <Shape {...SCANNER} {...props} _style={extendStyle(SCANNER, props)} />
}
