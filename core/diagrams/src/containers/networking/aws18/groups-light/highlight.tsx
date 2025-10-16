import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HIGHLIGHT = {
  _style: {
    container:
      'outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;strokeColor=#FF9900;fillColor=none;verticalAlign=top;align=center;fontColor=#FF9900;dashed=0;spacingTop=3;',
    entity: {
      strokeColor: '#FF9900',
      fontColor: '#FF9900',
    },
  },
}

export function Highlight(props: DiagramNodeProps) {
  return (
    <Shape {...HIGHLIGHT} {...props} _style={extendStyle(HIGHLIGHT, props)} />
  )
}
