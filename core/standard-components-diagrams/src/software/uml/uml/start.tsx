import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const START = {
  _style: {
    entity:
      'ellipse;html=1;shape=startState;fillColor=#000000;strokeColor=#ff0000;',
  },
  _original_width: 0,
  _original_height: 90,
}

export function Start(props: DiagramNodeProps) {
  return <Shape {...START} {...props} _style={extendStyle(START, props)} />
}
