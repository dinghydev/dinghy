import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HTML_TABLE_4 = {
  _style:
    'text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=none;overflow=fill;',
  _width: 180,
  _height: 180,
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
