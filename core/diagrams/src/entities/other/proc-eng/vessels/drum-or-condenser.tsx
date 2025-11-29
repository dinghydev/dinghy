import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DRUM_OR_CONDENSER = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.drum_or_condenser;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 91,
  _height: 30,
}

export function DrumOrCondenser(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DRUM_OR_CONDENSER)} />
}
