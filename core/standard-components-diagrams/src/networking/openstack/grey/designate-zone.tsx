import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DESIGNATE_ZONE = {
  _style:
    'fillColor=#808080;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.designate_zone;',
  _width: 60,
  _height: 60,
}

export function DesignateZone(props: DiagramNodeProps) {
  return (
    <Shape
      {...DESIGNATE_ZONE}
      {...props}
      _style={extendStyle(DESIGNATE_ZONE, props)}
    />
  )
}
