import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VAULT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.vault;fillColor=#E05243;gradientColor=none;',
  },
  _width: 54,
  _height: 75,
}

export function Vault(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VAULT)} />
}
