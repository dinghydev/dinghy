import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IOS_SLB = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.ios_slb;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 91,
  _height: 45,
}

export function IosSlb(props: NodeProps) {
  return <Shape {...IOS_SLB} {...props} _style={extendStyle(IOS_SLB, props)} />
}
