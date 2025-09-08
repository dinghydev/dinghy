import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SATISFY_CALLOUT = {
  _style: {
    entity:
      'shape=note;size=15;align=left;spacingLeft=5;html=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 1,
  _original_height: 60,
}

export function SatisfyCallout(props: DiagramNodeProps) {
  return (
    <Shape
      {...SATISFY_CALLOUT}
      {...props}
      _style={extendStyle(SATISFY_CALLOUT, props)}
    />
  )
}
