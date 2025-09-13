import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTIVITY = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=40;fontColor=#000000;fillColor=#ffffc0;strokeColor=#ff0000;',
  },
  _width: 0,
  _height: 100,
}

export function Activity(props: DiagramNodeProps) {
  return (
    <Shape {...ACTIVITY} {...props} _style={extendStyle(ACTIVITY, props)} />
  )
}
