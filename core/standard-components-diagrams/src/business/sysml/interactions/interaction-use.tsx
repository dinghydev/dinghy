import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERACTION_USE = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;labelX=40;whiteSpace=wrap;align=center;',
  },
  _original_width: 0,
  _original_height: 60,
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
