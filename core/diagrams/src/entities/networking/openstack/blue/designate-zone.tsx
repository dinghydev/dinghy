import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DESIGNATE_ZONE = {
  _style: {
    entity:
      'fillColor=#3F51B5;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.designate_zone;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function DesignateZone(props: NodeProps) {
  return (
    <Shape
      {...DESIGNATE_ZONE}
      {...props}
      _style={extendStyle(DESIGNATE_ZONE, props)}
    />
  )
}
