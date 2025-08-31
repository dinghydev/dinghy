import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRINTER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.printer;',
  },
  _width: 56,
  _height: 47,
}

export function Printer(props: DiagramNodeProps) {
  return <Shape {...PRINTER} {...props} _style={extendStyle(PRINTER, props)} />
}
