import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FACE_APIS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Face_APIs.svg;',
  _width: 68,
  _height: 68,
}

export function FaceApis(props: DiagramNodeProps) {
  return <Shape {...FACE_APIS} {...props} />
}
