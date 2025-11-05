import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIAGRAM_TITLE_2 = {
  _style: {
    entity:
      'text;html=1;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;',
  },
  _width: 500,
  _height: 50,
}

export function DiagramTitle2(props: NodeProps) {
  return (
    <Shape
      {...DIAGRAM_TITLE_2}
      {...props}
      _style={extendStyle(DIAGRAM_TITLE_2, props)}
    />
  )
}
