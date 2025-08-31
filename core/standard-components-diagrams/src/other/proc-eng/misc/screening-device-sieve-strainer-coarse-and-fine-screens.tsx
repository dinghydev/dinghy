import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCREENING_DEVICE_SIEVE_STRAINER_COARSE_AND_FINE_SCREENS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.screening_device,_sieve,_strainer_(coarse_and_fine_screens);',
  },
  _width: 80,
  _height: 120,
}

export function ScreeningDeviceSieveStrainerCoarseAndFineScreens(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...SCREENING_DEVICE_SIEVE_STRAINER_COARSE_AND_FINE_SCREENS}
      {...props}
      _style={extendStyle(
        SCREENING_DEVICE_SIEVE_STRAINER_COARSE_AND_FINE_SCREENS,
        props,
      )}
    />
  )
}
