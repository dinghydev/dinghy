import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEFENDER_HISTORIAN = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Historian.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 67.08,
}

export function DefenderHistorian(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_HISTORIAN}
      {...props}
      _style={extendStyle(DEFENDER_HISTORIAN, props)}
    />
  )
}
