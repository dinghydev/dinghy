import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TEXT_ANNOTATION = {
  _style: {
    entity:
      'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;',
  },
  _original_width: 80,
  _original_height: 30,
}

export function TextAnnotation(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEXT_ANNOTATION}
      {...props}
      _style={extendStyle(TEXT_ANNOTATION, props)}
    />
  )
}
