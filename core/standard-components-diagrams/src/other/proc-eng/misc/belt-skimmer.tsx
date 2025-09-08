import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BELT_SKIMMER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.belt_skimmer;',
  },
  _original_width: 70,
  _original_height: 98,
}

export function BeltSkimmer(props: DiagramNodeProps) {
  return (
    <Shape
      {...BELT_SKIMMER}
      {...props}
      _style={extendStyle(BELT_SKIMMER, props)}
    />
  )
}
