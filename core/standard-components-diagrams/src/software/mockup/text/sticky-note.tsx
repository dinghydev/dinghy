import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STICKY_NOTE = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.text.stickyNote2;fontColor=#666666;mainText=;fontSize=17;whiteSpace=wrap;fillColor=#ffffcc;strokeColor=#F62E00;',
  },
  _width: 200,
  _height: 200,
}

export function StickyNote(props: DiagramNodeProps) {
  return (
    <Shape
      {...STICKY_NOTE}
      {...props}
      _style={extendStyle(STICKY_NOTE, props)}
    />
  )
}
