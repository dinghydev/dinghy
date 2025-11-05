import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACI = {
  _style: {
    entity:
      'points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.305,0.305,0],[0.695,0.305,0],[0.7,0.7,0],[0.3,0.7,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=aci;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Aci(props: NodeProps) {
  return <Shape {...ACI} {...props} _style={extendStyle(ACI, props)} />
}
