import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HTML_TABLE_4 = {
  _style: {
    entity:
      'text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=none;overflow=fill;',
  },
  _original_width: 180,
  _original_height: 180,
}

export function HtmlTable4(props: DiagramNodeProps) {
  return (
    <Shape
      {...HTML_TABLE_4}
      {...props}
      _style={extendStyle(HTML_TABLE_4, props)}
    />
  )
}
