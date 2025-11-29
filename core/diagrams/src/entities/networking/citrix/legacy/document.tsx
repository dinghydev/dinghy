import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOCUMENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.document;',
  },
  _width: 47,
  _height: 72,
}

export function Document(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOCUMENT)} />
}
