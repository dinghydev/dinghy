import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_DCS_CONTROLLER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_DCS_Controller.svg;strokeColor=none;',
  _width: 68,
  _height: 62.4,
}

export function DefenderDcsController(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_DCS_CONTROLLER}
      {...props}
      _style={extendStyle(DEFENDER_DCS_CONTROLLER, props)}
    />
  )
}
