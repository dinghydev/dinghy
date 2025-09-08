import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SCREENING_DEVICE_SIEVE_STRAINER_FINE_RAKE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.screening_device,_sieve,_strainer_(fine_rake);',
  },
  _original_width: 80,
  _original_height: 120,
}

export function ScreeningDeviceSieveStrainerFineRake(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCREENING_DEVICE_SIEVE_STRAINER_FINE_RAKE}
      {...props}
      _style={extendStyle(SCREENING_DEVICE_SIEVE_STRAINER_FINE_RAKE, props)}
    />
  )
}
