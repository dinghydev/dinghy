import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HOSE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.hose;',
  },
  _width: 180,
  _height: 30,
}

export function Hose(props: NodeProps) {
  return <Shape {...HOSE} {...props} _style={extendStyle(HOSE, props)} />
}
