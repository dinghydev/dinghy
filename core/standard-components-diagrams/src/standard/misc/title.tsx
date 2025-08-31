import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TITLE = {
  _style:
    'text;strokeColor=none;fillColor=none;html=1;fontSize=24;fontStyle=1;verticalAlign=middle;align=center;',
  _width: 100,
  _height: 40,
}

export function Title(props: DiagramNodeProps) {
  return <Shape {...TITLE} {...props} _style={extendStyle(TITLE, props)} />
}
