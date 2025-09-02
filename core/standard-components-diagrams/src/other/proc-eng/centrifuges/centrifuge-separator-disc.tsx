import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CENTRIFUGE_SEPARATOR_DISC = {
  _style: {
    entity:
      'shape=mxgraph.pid.centrifuges.centrifuge_(separator_disc);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 110,
}

export function CentrifugeSeparatorDisc(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTRIFUGE_SEPARATOR_DISC}
      {...props}
      _style={extendStyle(CENTRIFUGE_SEPARATOR_DISC, props)}
    />
  )
}
