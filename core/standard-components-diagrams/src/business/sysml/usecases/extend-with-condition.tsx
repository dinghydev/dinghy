import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXTEND_WITH_CONDITION = {
  _style: 'shape=note;size=15;spacingLeft=5;align=left;whiteSpace=wrap;',
  _width: 250,
  _height: 80,
}

export function ExtendWithCondition(props: DiagramNodeProps) {
  return <Shape {...EXTEND_WITH_CONDITION} {...props} />
}
