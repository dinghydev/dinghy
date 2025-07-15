import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LABELS = {
  _style: 'shape=rect;fillColor=#F6F6F8;strokeColor=none;',
  _width: 0,
  _height: 20,
}

export function Labels(props: DiagramNodeProps) {
  return <Shape {...LABELS} {...props} />
}
