import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCREENING_DEVICE_SIEVE_STRAINER_FINE_RAKE = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.screening_device,_sieve,_strainer_(fine_rake);',
  _width: 80,
  _height: 120,
}

export function ScreeningDeviceSieveStrainerFineRake(props: DiagramNodeProps) {
  return <Shape {...SCREENING_DEVICE_SIEVE_STRAINER_FINE_RAKE} {...props} />
}
