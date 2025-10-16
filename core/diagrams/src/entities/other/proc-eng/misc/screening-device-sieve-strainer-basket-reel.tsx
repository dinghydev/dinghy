import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SCREENING_DEVICE_SIEVE_STRAINER_BASKET_REEL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.screening_device,_sieve,_strainer_(basket_reel);',
  },
  _width: 80,
  _height: 180,
}

export function ScreeningDeviceSieveStrainerBasketReel(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...SCREENING_DEVICE_SIEVE_STRAINER_BASKET_REEL}
      {...props}
      _style={extendStyle(SCREENING_DEVICE_SIEVE_STRAINER_BASKET_REEL, props)}
    />
  )
}
