import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SYSTEM_SOFTWARE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=sysSw;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function SystemSoftware(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SYSTEM_SOFTWARE)} />
}
