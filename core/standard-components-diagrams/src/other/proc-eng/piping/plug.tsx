import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLUG = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.plug;',
  },
  _width: 10,
  _height: 10,
}

export function Plug(props: DiagramNodeProps) {
  return <Shape {...PLUG} {...props} _style={extendStyle(PLUG, props)} />
}
