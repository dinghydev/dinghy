import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEAGULL = {
  _style: {
    entity: 'fillColor=#1EB5BD;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Seagull(props: DiagramNodeProps) {
  return <Shape {...SEAGULL} {...props} _style={extendStyle(SEAGULL, props)} />
}
