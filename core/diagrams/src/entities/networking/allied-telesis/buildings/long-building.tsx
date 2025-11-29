import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LONG_BUILDING = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/Long_Building.svg;strokeColor=none;',
  },
  _width: 125.39999999999999,
  _height: 129.60000000000002,
}

export function LongBuilding(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LONG_BUILDING)} />
}
