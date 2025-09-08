import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONTROL_OBJECT = {
  _style: {
    entity: 'ellipse;shape=umlControl;whiteSpace=wrap;html=1;',
  },
  _original_width: 70,
  _original_height: 80,
}

export function ControlObject(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTROL_OBJECT}
      {...props}
      _style={extendStyle(CONTROL_OBJECT, props)}
    />
  )
}
