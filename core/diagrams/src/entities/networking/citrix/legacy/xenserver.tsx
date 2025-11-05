import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const XENSERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xenserver;',
  },
  _original_width: 76.5,
  _original_height: 90,
}

export function Xenserver(props: NodeProps) {
  return (
    <Shape {...XENSERVER} {...props} _style={extendStyle(XENSERVER, props)} />
  )
}
