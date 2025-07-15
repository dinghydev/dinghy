import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_BASED_MANAGEMENT = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.cloud_based_management;',
  _width: 50,
  _height: 39,
}

export function CloudBasedManagement(props: DiagramNodeProps) {
  return <Shape {...CLOUD_BASED_MANAGEMENT} {...props} />
}
