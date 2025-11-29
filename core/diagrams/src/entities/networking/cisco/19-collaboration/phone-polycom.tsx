import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PHONE_POLYCOM = {
  _style: {
    entity:
      'points=[[0.5,0,0],[0.75,0.37,0],[0.96,0.735,0],[0.5,1,0],[0.045,0.73,0],[0.25,0.37,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.phone_polycom;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 47.5,
  _original_height: 50,
}

export function PhonePolycom(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PHONE_POLYCOM)} />
}
