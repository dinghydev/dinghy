import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEDICATED_HSM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Dedicated_HSM.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 62,
}

export function DedicatedHsm(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEDICATED_HSM}
      {...props}
      _style={extendStyle(DEDICATED_HSM, props)}
    />
  )
}
