import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SYSTEM_SOFTWARE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.sysSw;',
  },
  _original_width: 40,
  _original_height: 40,
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
