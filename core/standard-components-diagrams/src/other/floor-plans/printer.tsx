import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRINTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.printer;',
  },
  _width: 40,
  _height: 47,
}

export function Printer(props: DiagramNodeProps) {
  return <Shape {...PRINTER} {...props} _style={extendStyle(PRINTER, props)} />
}
