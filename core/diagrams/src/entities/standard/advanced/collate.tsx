import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COLLATE = {
  _style: {
    entity: 'shape=collate;whiteSpace=wrap;html=1;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Collate(props: DiagramNodeProps) {
  return <Shape {...COLLATE} {...props} _style={extendStyle(COLLATE, props)} />
}
