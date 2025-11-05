import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERCHANGEABLE_DISC_OPEN_DISC_IN_FUNCTION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.interchangeable_disc_(open_disc_in_function)2;',
  },
  _width: 40,
  _height: 140,
}

export function InterchangeableDiscOpenDiscInFunction(props: NodeProps) {
  return (
    <Shape
      {...INTERCHANGEABLE_DISC_OPEN_DISC_IN_FUNCTION}
      {...props}
      _style={extendStyle(INTERCHANGEABLE_DISC_OPEN_DISC_IN_FUNCTION, props)}
    />
  )
}
