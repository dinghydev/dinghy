import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_DEPLOYMENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.virtual_deployment;',
  },
  _original_width: 50,
  _original_height: 44.5,
}

export function VirtualDeployment(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_DEPLOYMENT}
      {...props}
      _style={extendStyle(VIRTUAL_DEPLOYMENT, props)}
    />
  )
}
