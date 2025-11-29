import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PODIO = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.podio;fillColor=#72B8DE;gradientColor=#186BA2;gradientDirection=south;',
  },
  _original_width: 37,
  _original_height: 37,
}

export function Podio(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PODIO)} />
}
