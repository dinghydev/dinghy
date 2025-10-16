import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MASTER_CALLOUT = {
  _style: {
    entity:
      'shape=note;html=1;size=15;align=left;spacingLeft=5;whiteSpace=wrap;align=center;',
  },
  _width: 0,
  _height: 60,
}

export function MasterCallout(props: DiagramNodeProps) {
  return (
    <Shape
      {...MASTER_CALLOUT}
      {...props}
      _style={extendStyle(MASTER_CALLOUT, props)}
    />
  )
}
