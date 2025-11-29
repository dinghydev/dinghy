import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LAPTOP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.laptop_1;',
  },
  _original_width: 91,
  _original_height: 77,
}

export function Laptop(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LAPTOP)} />
}
