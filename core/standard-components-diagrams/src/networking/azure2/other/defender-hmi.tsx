import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_HMI = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_HMI.svg;strokeColor=none;',
  _width: 68,
  _height: 52.88,
}

export function DefenderHmi(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_HMI}
      {...props}
      _style={extendStyle(DEFENDER_HMI, props)}
    />
  )
}
