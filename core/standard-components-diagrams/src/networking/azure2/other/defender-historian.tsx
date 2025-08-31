import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_HISTORIAN = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Historian.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 67.08,
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
