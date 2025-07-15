import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTROL_OBJECT = {
  _style: 'ellipse;shape=umlControl;whiteSpace=wrap;html=1;',
  _width: 70,
  _height: 80,
}

export function ControlObject(props: DiagramNodeProps) {
  return <Shape {...CONTROL_OBJECT} {...props} />
}
