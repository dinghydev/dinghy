import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const START = {
  _style:
    'ellipse;html=1;shape=startState;fillColor=#000000;strokeColor=#ff0000;',
  _width: 0,
  _height: 90,
}

export function Start(props: DiagramNodeProps) {
  return <Shape {...START} {...props} _style={extendStyle(START, props)} />
}
