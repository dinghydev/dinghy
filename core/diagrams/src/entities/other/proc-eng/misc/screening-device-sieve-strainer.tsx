import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCREENING_DEVICE_SIEVE_STRAINER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.screening_device,_sieve,_strainer;',
  },
  _width: 80,
  _height: 120,
}

export function ScreeningDeviceSieveStrainer(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SCREENING_DEVICE_SIEVE_STRAINER)}
    />
  )
}
