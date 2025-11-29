import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOCUMENTS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.documents;fillColor=#759C3E;gradientColor=none;',
  },
  _width: 90,
  _height: 100.5,
}

export function Documents(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOCUMENTS)} />
}
