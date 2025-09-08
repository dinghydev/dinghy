import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOCUMENT_MESSAGE = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#C7A0FF;fontStyle=1;whiteSpace=wrap;html=1;',
  },
  _original_width: 2,
  _original_height: 30,
}

export function DocumentMessage(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOCUMENT_MESSAGE}
      {...props}
      _style={extendStyle(DOCUMENT_MESSAGE, props)}
    />
  )
}
