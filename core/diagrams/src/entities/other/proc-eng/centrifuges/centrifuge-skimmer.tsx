import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CENTRIFUGE_SKIMMER = {
  _style: {
    entity:
      'shape=mxgraph.pid.centrifuges.centrifuge_(skimmer);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 110,
  _height: 100,
}

export function CentrifugeSkimmer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CENTRIFUGE_SKIMMER)} />
}
