import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TITLE = {
  _style: {
    entity:
      'text;strokeColor=none;fillColor=none;html=1;fontSize=24;fontStyle=1;verticalAlign=middle;align=center;',
  },
  _width: 100,
  _height: 40,
}

export function Title(props: DiagramNodeProps) {
  return <Shape {...TITLE} {...props} _style={extendStyle(TITLE, props)} />
}
