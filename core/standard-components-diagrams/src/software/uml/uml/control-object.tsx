import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTROL_OBJECT = {
  _style: {
    entity: 'ellipse;shape=umlControl;whiteSpace=wrap;html=1;',
  },
  _width: 70,
  _height: 80,
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
