import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OBJECT = {
  _style: {
    entity: 'html=1;whiteSpace=wrap;',
  },
  _original_width: 110,
  _original_height: 50,
}

export function Object(props: DiagramNodeProps) {
  return <Shape {...OBJECT} {...props} _style={extendStyle(OBJECT, props)} />
}
