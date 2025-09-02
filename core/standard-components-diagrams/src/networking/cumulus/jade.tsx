import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JADE = {
  _style: {
    entity: 'fillColor=#00AD69;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Jade(props: DiagramNodeProps) {
  return <Shape {...JADE} {...props} _style={extendStyle(JADE, props)} />
}
