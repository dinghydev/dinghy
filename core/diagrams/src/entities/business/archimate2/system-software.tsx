import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SYSTEM_SOFTWARE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.application;appType=sysSw',
  },
  _width: 100,
  _height: 75,
}

export function SystemSoftware(props: NodeProps) {
  return (
    <Shape
      {...SYSTEM_SOFTWARE}
      {...props}
      _style={extendStyle(SYSTEM_SOFTWARE, props)}
    />
  )
}
