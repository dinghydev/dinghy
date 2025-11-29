import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ADMINISTRATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.administration',
  },
  _width: 30,
  _height: 50,
}

export function Administration(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ADMINISTRATION)} />
}
