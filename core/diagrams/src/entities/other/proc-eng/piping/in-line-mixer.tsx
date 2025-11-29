import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IN_LINE_MIXER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.in-line_mixer;',
  },
  _width: 50,
  _height: 10,
}

export function InLineMixer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IN_LINE_MIXER)} />
}
