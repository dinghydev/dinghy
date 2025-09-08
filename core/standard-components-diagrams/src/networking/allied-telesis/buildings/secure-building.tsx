import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SECURE_BUILDING = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/Secure_Building.svg;strokeColor=none;',
  },
  _original_width: 163.20000000000002,
  _original_height: 111.60000000000001,
}

export function SecureBuilding(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURE_BUILDING}
      {...props}
      _style={extendStyle(SECURE_BUILDING, props)}
    />
  )
}
