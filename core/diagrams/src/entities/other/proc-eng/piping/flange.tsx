import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLANGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.flange;pointerEvents=1;',
  },
  _width: 5,
  _height: 20,
}

export function Flange(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FLANGE)} />
}
