import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_AVAILABILITY_SUITE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.veeam_availability_suite;',
  },
  _original_width: 46,
  _original_height: 46,
}

export function VeeamAvailabilitySuite(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_AVAILABILITY_SUITE}
      {...props}
      _style={extendStyle(VEEAM_AVAILABILITY_SUITE, props)}
    />
  )
}
