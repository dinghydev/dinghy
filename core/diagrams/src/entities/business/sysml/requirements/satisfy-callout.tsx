import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SATISFY_CALLOUT = {
  _style: {
    entity:
      'shape=note;size=15;align=left;spacingLeft=5;html=1;whiteSpace=wrap;align=center;',
  },
  _width: 1,
  _height: 60,
}

export function SatisfyCallout(props: NodeProps) {
  return (
    <Shape
      {...SATISFY_CALLOUT}
      {...props}
      _style={extendStyle(SATISFY_CALLOUT, props)}
    />
  )
}
