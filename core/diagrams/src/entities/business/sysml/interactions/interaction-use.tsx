import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERACTION_USE = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;labelX=40;whiteSpace=wrap;align=center;',
  },
  _width: 0,
  _height: 60,
}

export function InteractionUse(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERACTION_USE}
      {...props}
      _style={extendStyle(INTERACTION_USE, props)}
    />
  )
}
