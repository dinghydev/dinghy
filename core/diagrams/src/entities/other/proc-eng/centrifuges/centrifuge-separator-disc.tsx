import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CENTRIFUGE_SEPARATOR_DISC = {
  _style: {
    entity:
      'shape=mxgraph.pid.centrifuges.centrifuge_(separator_disc);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 110,
}

export function CentrifugeSeparatorDisc(props: NodeProps) {
  return (
    <Shape
      {...CENTRIFUGE_SEPARATOR_DISC}
      {...props}
      _style={extendStyle(CENTRIFUGE_SEPARATOR_DISC, props)}
    />
  )
}
