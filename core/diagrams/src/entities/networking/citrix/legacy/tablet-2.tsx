import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLET_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.tablet_2;',
  },
  _original_width: 82,
  _original_height: 86,
}

export function Tablet2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLET_2)} />
}
