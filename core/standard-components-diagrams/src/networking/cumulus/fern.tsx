import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FERN = {
  _style: {
    entity: 'fillColor=#4BC05B;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Fern(props: DiagramNodeProps) {
  return <Shape {...FERN} {...props} _style={extendStyle(FERN, props)} />
}
