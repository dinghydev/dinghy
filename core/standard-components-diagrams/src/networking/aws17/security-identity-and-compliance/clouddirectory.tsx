import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUDDIRECTORY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.clouddirectory;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 102,
  _original_height: 109.5,
}

export function Clouddirectory(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUDDIRECTORY}
      {...props}
      _style={extendStyle(CLOUDDIRECTORY, props)}
    />
  )
}
