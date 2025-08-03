import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURE_BUILDING = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/Secure_Building.svg;strokeColor=none;',
  _width: 163.20000000000002,
  _height: 111.60000000000001,
}

export function SecureBuilding(props: DiagramNodeProps) {
  return <Shape {...SECURE_BUILDING} {...props} />
}
