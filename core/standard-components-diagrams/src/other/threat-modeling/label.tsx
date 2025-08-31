import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LABEL = {
  _style:
    'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;overflow=hidden;',
  _width: 80,
  _height: 20,
}

export function Label(props: DiagramNodeProps) {
  return <Shape {...LABEL} {...props} _style={extendStyle(LABEL, props)} />
}
