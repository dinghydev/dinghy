import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLLATE = {
  _style: 'shape=collate;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function Collate(props: DiagramNodeProps) {
  return <Shape {...COLLATE} {...props} _style={extendStyle(COLLATE, props)} />
}
