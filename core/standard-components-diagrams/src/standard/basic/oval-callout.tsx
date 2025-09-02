import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OVAL_CALLOUT = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.oval_callout',
  },
  _original_width: 100,
  _original_height: 60,
}

export function OvalCallout(props: DiagramNodeProps) {
  return (
    <Shape
      {...OVAL_CALLOUT}
      {...props}
      _style={extendStyle(OVAL_CALLOUT, props)}
    />
  )
}
