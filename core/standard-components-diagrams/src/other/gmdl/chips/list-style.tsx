import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIST_STYLE = {
  _style: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  _width: 358,
  _height: 642,
}

export function ListStyle(props: DiagramNodeProps) {
  return <Shape {...LIST_STYLE} {...props} />
}
