import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOBILE_SERVICES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.mobile_services;pointerEvents=1;',
  },
  _original_width: 32.5,
  _original_height: 50,
}

export function MobileServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOBILE_SERVICES}
      {...props}
      _style={extendStyle(MOBILE_SERVICES, props)}
    />
  )
}
