import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PHYSICAL_HOST_FARM = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.physical_host_farm;fillColor=#2072B8;',
  },
  _width: 56,
  _height: 49,
}

export function PhysicalHostFarm(props: DiagramNodeProps) {
  return (
    <Shape
      {...PHYSICAL_HOST_FARM}
      {...props}
      _style={extendStyle(PHYSICAL_HOST_FARM, props)}
    />
  )
}
