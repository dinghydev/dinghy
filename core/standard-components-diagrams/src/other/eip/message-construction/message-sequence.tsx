import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_SEQUENCE = {
  _style: {
    entity:
      'curved=1;endArrow=block;html=1;strokeColor=#1CCF00;strokeWidth=2;endSize=3;rounded=0;',
  },
  _original_width: 60,
  _original_height: 24,
}

export function MessageSequence(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_SEQUENCE}
      {...props}
      _style={extendStyle(MESSAGE_SEQUENCE, props)}
    />
  )
}
