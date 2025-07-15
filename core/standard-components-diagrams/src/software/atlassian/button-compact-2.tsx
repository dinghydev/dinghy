import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON_COMPACT_2 = {
  _style: 'shape=ellipse;fillColor=#596780;strokeColor=none;html=1;sketch=0;',
  _width: 1,
  _height: 33,
}

export function ButtonCompact2(props: DiagramNodeProps) {
  return <Shape {...BUTTON_COMPACT_2} {...props} />
}
