import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHAREFILE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.sharefile;fillColor=#386510;gradientColor=#C6CF2B;gradientDirection=south;',
  },
  _original_width: 38,
  _original_height: 38,
}

export function Sharefile(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SHAREFILE)} />
}
