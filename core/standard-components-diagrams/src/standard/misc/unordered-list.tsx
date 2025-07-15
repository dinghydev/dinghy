import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const UNORDERED_LIST = {
  _style:
    'text;strokeColor=none;fillColor=none;html=1;whiteSpace=wrap;verticalAlign=middle;overflow=hidden;',
  _width: 100,
  _height: 80,
}

export function UnorderedList(props: DiagramNodeProps) {
  return <Shape {...UNORDERED_LIST} {...props} />
}
