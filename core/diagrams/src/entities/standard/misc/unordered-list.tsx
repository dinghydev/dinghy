import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UNORDERED_LIST = {
  _style: {
    entity:
      'text;strokeColor=none;fillColor=none;html=1;whiteSpace=wrap;verticalAlign=middle;overflow=hidden;',
  },
  _width: 100,
  _height: 80,
}

export function UnorderedList(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, UNORDERED_LIST)} />
}
