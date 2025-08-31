import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SYSTEM_SOFTWARE_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.sysSw;',
  _width: 40,
  _height: 40,
}

export function SystemSoftware2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SYSTEM_SOFTWARE_2}
      {...props}
      _style={extendStyle(SYSTEM_SOFTWARE_2, props)}
    />
  )
}
