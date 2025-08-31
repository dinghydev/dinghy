import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLLABORATIVE_SERVICE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_ecosystem/Collaborative_Service.svg;strokeColor=none;',
  _width: 68,
  _height: 66.8,
}

export function CollaborativeService(props: DiagramNodeProps) {
  return (
    <Shape
      {...COLLABORATIVE_SERVICE}
      {...props}
      _style={extendStyle(COLLABORATIVE_SERVICE, props)}
    />
  )
}
