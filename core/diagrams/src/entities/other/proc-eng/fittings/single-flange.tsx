import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINGLE_FLANGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.single_flange;',
  },
  _width: 5,
  _height: 50,
}

export function SingleFlange(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SINGLE_FLANGE)} />
}
