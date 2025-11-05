import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CAPABILITY = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.application;appType=capability;archiType=rounded;',
  },
  _width: 150,
  _height: 75,
}

export function Capability(props: NodeProps) {
  return (
    <Shape {...CAPABILITY} {...props} _style={extendStyle(CAPABILITY, props)} />
  )
}
