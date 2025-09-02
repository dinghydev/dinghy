import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SYSTEM_SOFTWARE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=sysSw;archiType=square;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function SystemSoftware(props: DiagramNodeProps) {
  return (
    <Shape
      {...SYSTEM_SOFTWARE}
      {...props}
      _style={extendStyle(SYSTEM_SOFTWARE, props)}
    />
  )
}
