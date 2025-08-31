import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISPLAY = {
  _style: {
    entity: 'shape=display;whiteSpace=wrap;html=1;',
  },
  _width: 80,
  _height: 40,
}

export function Display(props: DiagramNodeProps) {
  return <Shape {...DISPLAY} {...props} _style={extendStyle(DISPLAY, props)} />
}
