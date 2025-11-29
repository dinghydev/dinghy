import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEXT_ANNOTATION = {
  _style: {
    entity:
      'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;',
  },
  _width: 80,
  _height: 30,
}

export function TextAnnotation(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TEXT_ANNOTATION)} />
}
