import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PHYSICAL_HOST_FARM = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.physical_host_farm;fillColor=#2072B8;',
  },
  _original_width: 56,
  _original_height: 49,
}

export function PhysicalHostFarm(props: NodeProps) {
  return (
    <Shape
      {...PHYSICAL_HOST_FARM}
      {...props}
      _style={extendStyle(PHYSICAL_HOST_FARM, props)}
    />
  )
}
