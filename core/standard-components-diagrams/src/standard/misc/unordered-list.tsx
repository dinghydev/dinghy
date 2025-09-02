import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UNORDERED_LIST = {
  _style: {
    entity:
      'text;strokeColor=none;fillColor=none;html=1;whiteSpace=wrap;verticalAlign=middle;overflow=hidden;',
  },
  _original_width: 100,
  _original_height: 80,
}

export function UnorderedList(props: DiagramNodeProps) {
  return (
    <Shape
      {...UNORDERED_LIST}
      {...props}
      _style={extendStyle(UNORDERED_LIST, props)}
    />
  )
}
