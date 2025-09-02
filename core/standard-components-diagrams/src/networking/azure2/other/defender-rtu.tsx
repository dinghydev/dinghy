import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_RTU = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_RTU.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60.440000000000005,
}

export function DefenderRtu(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_RTU}
      {...props}
      _style={extendStyle(DEFENDER_RTU, props)}
    />
  )
}
