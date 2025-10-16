import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEFENDER_HMI = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_HMI.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 52.88,
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
