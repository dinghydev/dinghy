import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BIZTALK_SERVICES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.biztalk_services;',
  },
  _width: 60,
  _height: 60,
}

export function BiztalkServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...BIZTALK_SERVICES}
      {...props}
      _style={extendStyle(BIZTALK_SERVICES, props)}
    />
  )
}
