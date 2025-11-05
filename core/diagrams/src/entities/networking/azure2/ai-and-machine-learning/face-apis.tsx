import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FACE_APIS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Face_APIs.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function FaceApis(props: NodeProps) {
  return (
    <Shape {...FACE_APIS} {...props} _style={extendStyle(FACE_APIS, props)} />
  )
}
