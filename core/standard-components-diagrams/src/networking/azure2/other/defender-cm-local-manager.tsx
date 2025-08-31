import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_CM_LOCAL_MANAGER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_CM_Local_Manager.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function DefenderCmLocalManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_CM_LOCAL_MANAGER}
      {...props}
      _style={extendStyle(DEFENDER_CM_LOCAL_MANAGER, props)}
    />
  )
}
