import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BIZTALK_SERVICES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.biztalk_services;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function BiztalkServices(props: NodeProps) {
  return (
    <Shape
      {...BIZTALK_SERVICES}
      {...props}
      _style={extendStyle(BIZTALK_SERVICES, props)}
    />
  )
}
