import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERACTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=interaction;archiType=rounded;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Interaction(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERACTION}
      {...props}
      _style={extendStyle(INTERACTION, props)}
    />
  )
}
