import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCREENING_DEVICE_SIEVE_STRAINER_VIBRATING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.screening_device,_sieve,_strainer_(vibrating)2;',
  },
  _original_width: 80,
  _original_height: 120,
}

export function ScreeningDeviceSieveStrainerVibrating(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCREENING_DEVICE_SIEVE_STRAINER_VIBRATING}
      {...props}
      _style={extendStyle(SCREENING_DEVICE_SIEVE_STRAINER_VIBRATING, props)}
    />
  )
}
