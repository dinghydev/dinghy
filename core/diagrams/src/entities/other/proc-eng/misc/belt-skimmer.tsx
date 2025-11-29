import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BELT_SKIMMER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.belt_skimmer;',
  },
  _width: 70,
  _height: 98,
}

export function BeltSkimmer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BELT_SKIMMER)} />
}
