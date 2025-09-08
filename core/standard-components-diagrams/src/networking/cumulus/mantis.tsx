import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MANTIS = {
  _style: {
    entity: 'fillColor=#7CCC6C;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Mantis(props: DiagramNodeProps) {
  return <Shape {...MANTIS} {...props} _style={extendStyle(MANTIS, props)} />
}
