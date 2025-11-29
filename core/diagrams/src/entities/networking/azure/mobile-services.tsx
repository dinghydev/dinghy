import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOBILE_SERVICES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.mobile_services;pointerEvents=1;',
  },
  _width: 32.5,
  _height: 50,
}

export function MobileServices(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MOBILE_SERVICES)} />
}
