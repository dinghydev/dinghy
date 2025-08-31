import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_AVAILABILITY_SUITE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.veeam_availability_suite;',
  _width: 46,
  _height: 46,
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
