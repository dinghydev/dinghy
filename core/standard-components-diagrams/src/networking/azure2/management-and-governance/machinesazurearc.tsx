import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MACHINESAZUREARC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/MachinesAzureArc.svg;strokeColor=none;',
  },
  _width: 44,
  _height: 68,
}

export function Machinesazurearc(props: DiagramNodeProps) {
  return (
    <Shape
      {...MACHINESAZUREARC}
      {...props}
      _style={extendStyle(MACHINESAZUREARC, props)}
    />
  )
}
