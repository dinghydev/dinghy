import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRINTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.printer;',
  },
  _width: 60,
  _height: 60,
}

export function Printer(props: DiagramNodeProps) {
  return <Shape {...PRINTER} {...props} _style={extendStyle(PRINTER, props)} />
}
