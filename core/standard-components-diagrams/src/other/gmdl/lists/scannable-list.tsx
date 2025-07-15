import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCANNABLE_LIST = {
  _style: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  _width: 358,
  _height: 642,
}

export function ScannableList(props: DiagramNodeProps) {
  return <Shape {...SCANNABLE_LIST} {...props} />
}
