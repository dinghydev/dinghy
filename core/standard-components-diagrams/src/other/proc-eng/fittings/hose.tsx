import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HOSE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.hose;',
  },
  _original_width: 180,
  _original_height: 30,
}

export function Hose(props: DiagramNodeProps) {
  return <Shape {...HOSE} {...props} _style={extendStyle(HOSE, props)} />
}
