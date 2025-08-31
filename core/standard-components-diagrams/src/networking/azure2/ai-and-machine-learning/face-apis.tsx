import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FACE_APIS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Face_APIs.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function FaceApis(props: DiagramNodeProps) {
  return (
    <Shape {...FACE_APIS} {...props} _style={extendStyle(FACE_APIS, props)} />
  )
}
