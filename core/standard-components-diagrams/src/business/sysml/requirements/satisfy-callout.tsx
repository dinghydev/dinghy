import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SATISFY_CALLOUT = {
  _style:
    'shape=note;size=15;align=left;spacingLeft=5;html=1;whiteSpace=wrap;align=center;',
  _width: 1,
  _height: 60,
}

export function SatisfyCallout(props: DiagramNodeProps) {
  return <Shape {...SATISFY_CALLOUT} {...props} />
}
