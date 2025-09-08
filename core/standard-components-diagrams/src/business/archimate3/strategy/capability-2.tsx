import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CAPABILITY_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.capability;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function Capability2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CAPABILITY_2}
      {...props}
      _style={extendStyle(CAPABILITY_2, props)}
    />
  )
}
