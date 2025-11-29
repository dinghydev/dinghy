import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEREOTYPE_NOTE = {
  _style: {
    entity:
      'shape=note;size=15;spacingLeft=5;html=1;overflow=fill;whiteSpace=wrap;',
  },
  _width: 320,
  _height: 150,
}

export function StereotypeNote(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STEREOTYPE_NOTE)} />
}
