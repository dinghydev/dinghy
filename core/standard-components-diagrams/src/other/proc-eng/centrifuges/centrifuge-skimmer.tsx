import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CENTRIFUGE_SKIMMER = {
  _style: {
    entity:
      'shape=mxgraph.pid.centrifuges.centrifuge_(skimmer);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 110,
  _original_height: 100,
}

export function CentrifugeSkimmer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTRIFUGE_SKIMMER}
      {...props}
      _style={extendStyle(CENTRIFUGE_SKIMMER, props)}
    />
  )
}
