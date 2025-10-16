import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DIAGRAM_TITLE = {
  _style: {
    entity:
      'text;html=1;align=left;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;fontSize=16;fontColor=#0070F2;fontFamily=Helvetica;fontStyle=1',
  },
  _width: 120,
  _height: 30,
}

export function DiagramTitle(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIAGRAM_TITLE}
      {...props}
      _style={extendStyle(DIAGRAM_TITLE, props)}
    />
  )
}
