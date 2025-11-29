import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AVAILABILITY_SUITE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.veeam_availability_suite;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function AvailabilitySuite(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AVAILABILITY_SUITE)} />
}
