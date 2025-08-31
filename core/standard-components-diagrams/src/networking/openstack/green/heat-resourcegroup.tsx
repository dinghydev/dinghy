import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEAT_RESOURCEGROUP = {
  _style:
    'fillColor=#008000;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.heat_resourcegroup;',
  _width: 60,
  _height: 60,
}

export function HeatResourcegroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...HEAT_RESOURCEGROUP}
      {...props}
      _style={extendStyle(HEAT_RESOURCEGROUP, props)}
    />
  )
}
