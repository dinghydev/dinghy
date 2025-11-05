import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CSM_S = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.csm-s;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 64,
  _height: 85,
}

export function CsmS(props: NodeProps) {
  return <Shape {...CSM_S} {...props} _style={extendStyle(CSM_S, props)} />
}
